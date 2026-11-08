// Shared helpers. Every internal link goes through url() so the site works
// both under the GitHub Pages sub-path and on jamesspooner.org.

const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/** Build an internal link or asset path, e.g. url('projects/') */
export function url(path = ''): string {
  return BASE + path.replace(/^\/+/, '');
}

/** Strip the base so a pathname can be compared with nav paths. */
export function sitePath(pathname: string): string {
  const p = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname.replace(/^\/+/, '');
  return p.replace(/\/+$/, '');
}

export const NAV = [
  { label: 'Home', path: '' },
  { label: 'Experience', path: 'experience' },
  { label: 'Projects', path: 'projects' },
  { label: 'Skills & Education', path: 'skills-education' },
  { label: 'Beyond the Map', path: 'beyond-the-map' },
  { label: 'Contact', path: 'contact' },
] as const;

/** Is this nav item the current section? Case studies count as Projects. */
export function isCurrent(navPath: string, pathname: string): boolean {
  const here = sitePath(pathname);
  if (navPath === '') return here === '';
  return here === navPath || here.startsWith(`${navPath}/`);
}

/** "PostgreSQL / PostGIS" -> "postgresql-postgis" (anchor ids for skills) */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2025-01" -> "Jan 2025" */
export function formatMonth(ym: string): string {
  const [y, m] = ym.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/**
 * Duration counted inclusively by month, like LinkedIn: Jan-Mar is 3 mos.
 * Open-ended roles are counted to the build date (the deploy workflow
 * rebuilds monthly so this stays current).
 */
export function duration(start: string, end?: string): string {
  const [sy, sm] = start.split('-').map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const total = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(total / 12);
  const m = total % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} ${y > 1 ? 'yrs' : 'yr'}`);
  if (m) parts.push(`${m} ${m > 1 ? 'mos' : 'mo'}`);
  return parts.join(' ');
}
