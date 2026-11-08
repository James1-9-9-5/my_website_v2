// @ts-check
import { defineConfig } from 'astro/config';

// Launch switch. While the site is on the GitHub Pages address
// (https://james1-9-9-5.github.io/my_website_v2/) keep this false.
// When jamesspooner.org is moved to this repo, set it to true
// (see README "Moving jamesspooner.org to this site").
const CUSTOM_DOMAIN = false;

export default defineConfig({
  site: CUSTOM_DOMAIN ? 'https://jamesspooner.org' : 'https://james1-9-9-5.github.io',
  base: CUSTOM_DOMAIN ? '/' : '/my_website_v2',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
