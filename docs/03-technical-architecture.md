# 03 - Technical Architecture

## Stack
| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Astro (static output) | Decision D2 in doc 11. Alternative considered: Next.js static export |
| Language | TypeScript | |
| Content | Astro content collections | Markdown for experience, projects, pages; YAML for skills and education (doc 02) |
| Validation | Schemas in the content config | Enforces the build-failure rules in doc 02 (missing alt text, `pending` clearance, broken role links) |
| Styling | Plain CSS with design tokens (doc 04) | |
| Maps (v2) | MapLibre GL or Leaflet + GeoJSON | Only on pages that need them |
| Hosting | GitHub Pages via GitHub Actions | |
| Node | Pin the current LTS in `.nvmrc` | |

Why Astro over Next.js: the site is mostly content with little interactivity, Astro ships almost no JavaScript by default, and its content collections cover the doc 02 model directly. The reference site appears to use Next.js, but the structure and design are what I'm borrowing, not the framework.

## Repo layout (target)
```
content/
  pages/            home.md, beyond-the-map.md, contact.md
  experience/       one file per role
  projects/         one file per project
  data/             skills.yaml, education.yaml
docs/               planning documents
media-source/       original media (not deployed)
public/             optimised images, CV PDF, favicon, CNAME (at launch)
scripts/            image optimisation, validation helpers
src/                layouts, components, pages, styles, content config
test/               link, accessibility and schema checks
AGENTS.md           instructions for AI coding assistants
```

## Routes
Generated from doc 01: `/`, `/experience`, `/projects`, `/projects/[slug]`, `/skills-education`, `/beyond-the-map`, `/contact`, `/404`.

## Hosting and domain
- **Staging:** the site first deploys to the repo's GitHub Pages address (`<username>.github.io/<repo-name>/`). Because that address has a sub-path, the Astro config needs `site` and `base` set correctly, or links and images break.
- **Production:** the site currently lives at jamesspooner.org. A custom domain can only point at one Pages site at a time, so cutover is a deliberate step at launch: finish and test on the staging address, then move the domain (CNAME file in `public/`, DNS and Pages settings) to the new repo.
- Keep the old site live until the new one passes the launch checks in doc 07.
- Check Astro's current GitHub Pages deployment guide before writing the workflow, since the recommended setup changes between versions.

## Build and deploy
- `npm run dev`: local dev server
- `npm run build`: static build
- `npm run lint` and `npm test`
- GitHub Action: on push to `main`, install, build, deploy to Pages

## Quality gates (CI)
- Lint and type-check pass
- Content schema validates (includes the clearance rule)
- No broken internal links
- Accessibility check on key pages
- Build output size checked against the budget in doc 07
