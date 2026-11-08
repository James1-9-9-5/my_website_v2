import type { APIRoute } from 'astro';
import { getProjects } from '../lib/content';
import { NAV, url } from '../lib/site';

export const GET: APIRoute = async ({ site }) => {
  const projects = await getProjects();
  const paths = [
    ...NAV.map((n) => (n.path ? `${n.path}/` : '')),
    ...projects.map((p) => `projects/${p.id}/`),
  ];
  const urls = paths.map((p) => `  <url><loc>${new URL(url(p), site).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
