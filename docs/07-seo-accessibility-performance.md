# 07 - SEO, Accessibility, Performance

## SEO
- Unique `<title>` and meta description per page (from `title` and `summary`).
- Open Graph and Twitter card tags, with a default share image (doc 05).
- `lang="en-CA"`, `og:locale` = `en_CA`.
- Canonical URL, sitemap.xml, robots.txt.
- Structured data: `Person` on Home (name, job title, employer, LinkedIn and GitHub as `sameAs`).

## Accessibility (WCAG 2.2 AA)
- Skip-to-content link; landmark regions; one H1 per page.
- Keyboard navigable; visible focus.
- Alt text, captions/transcripts for video.
- Collapsible Experience roles work by keyboard and without JavaScript.
- Respect `prefers-reduced-motion`.

## Performance budget
| Metric | Target |
|--------|--------|
| Lighthouse performance | 90+ |
| Lighthouse accessibility | 90+ |
| Lighthouse SEO | 90+ |
| LCP | under 2.5 s |
| CLS | under 0.1 |
| JS shipped on content pages | as little as possible (none required) |

## Checks
Run Lighthouse and an axe accessibility audit on every route before each milestone is marked done. Launch requires zero serious or critical axe issues (doc 00).
