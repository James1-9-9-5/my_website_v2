// Post-build checks (run after `npm run build`): npm test
// - every page: lang="en-CA", a <title>, a meta description, exactly one <h1>
// - every <img> has an alt attribute
// - every internal link and asset path points to a file that exists in dist/
// No dependencies: plain Node.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
if (!existsSync(DIST)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

// Read base from astro.config.mjs output: every built link starts with it.
const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
const customDomain = /const CUSTOM_DOMAIN = true/.test(config);
const BASE = customDomain ? '/' : '/my_website_v2/';

const htmlFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) htmlFiles.push(p);
  }
})(DIST);

const errors = [];
const fail = (file, msg) => errors.push(`${relative(DIST, file)}: ${msg}`);

function resolves(ref) {
  let path = ref.split('#')[0].split('?')[0];
  if (!path) return true; // same-page anchor
  if (!path.startsWith(BASE)) return false;
  path = decodeURIComponent(path.slice(BASE.length));
  const target = join(DIST, path);
  return existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (!/<html lang="en-CA"/.test(html)) fail(file, 'missing lang="en-CA"');
  if (!/<title>[^<]+<\/title>/.test(html)) fail(file, 'missing <title>');
  if (!/<meta name="description" content="[^"]+"/.test(html)) fail(file, 'missing meta description');
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(file, `expected 1 <h1>, found ${h1s}`);

  for (const img of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\salt="/.test(img)) fail(file, `image without alt: ${img.slice(0, 80)}...`);
  }

  for (const [, ref] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue;
    if (ref.startsWith('#')) continue;
    if (!resolves(ref)) fail(file, `broken internal link: ${ref}`);
  }
  for (const [, set] of html.matchAll(/\ssrcset="([^"]+)"/g)) {
    for (const part of set.split(',')) {
      const ref = part.trim().split(/\s+/)[0];
      if (!resolves(ref)) fail(file, `broken image in srcset: ${ref}`);
    }
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
console.log(`✓ ${htmlFiles.length} pages checked: titles, descriptions, one h1, alt text, internal links (base ${BASE})`);
