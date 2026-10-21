# 07 - SEO, Accessibility, Performance

## SEO
- Unique `<title>` and meta description per page (from `title` and `summary`).
- Open Graph and Twitter card tags, with a default share image.
- Canonical URL, sitemap.xml, robots.txt.
- Structured data: Person on About/Home.

## Accessibility (WCAG 2.2 AA)
- Skip-to-content link; landmark regions; one H1 per page.
- Keyboard navigable; visible focus.
- Alt text, captions/transcripts for video.
- Respect `prefers-reduced-motion`.

## Performance budget
| Metric | Target |
|--------|--------|
| Lighthouse performance | 90+ |
| LCP | under 2.5 s |
| CLS | under 0.1 |
| JS shipped on content pages | as little as possible |

## Checks
Run Lighthouse and an accessibility audit before each milestone is marked done.
