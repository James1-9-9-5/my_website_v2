# 03 - Technical Architecture

## Stack (decision pending: see doc 11)
| Layer | Option A (default) | Option B |
|-------|--------------------|----------|
| Framework | Astro | Next.js (static export) |
| Language | TypeScript | TypeScript |
| Content | Markdown + front matter, schema-validated | Same (MDX or a markdown loader) |
| Styling | CSS variables / design tokens | Same |
| Maps | MapLibre GL or Leaflet + GeoJSON | Same |
| Hosting | GitHub Pages via GitHub Actions | Same |
| Node | Pin version in `.nvmrc` | Same |

Reasoning: the reference repo appears to use Next.js. Astro is simpler for markdown-heavy sites; Next.js is the right pick if I want the same stack and plan to add app-like features.

## Repo layout (target)
```
content/            markdown content (work, playbook, lab, pages)
docs/               planning documents (this folder)
media-source/       original, unoptimised media (not deployed)
public/             optimised assets served as-is
scripts/            build helpers (image optimisation, validation)
src/                components, layouts, pages, styles
test/               tests (links, a11y, content schema)
AGENTS.md           instructions for AI coding assistants
```

## Build and deploy
- `npm run dev`: local dev server
- `npm run build`: static build to the output folder
- `npm run lint` / `npm test`
- GitHub Action: on push to `main`, install, build, deploy to Pages

## Quality gates (CI)
- Lint and type-check pass
- Content schema validates
- No broken internal links
- Accessibility check on key pages
