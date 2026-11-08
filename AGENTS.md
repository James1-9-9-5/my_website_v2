# AGENTS.md

Instructions for AI coding assistants working in this repo. `CLAUDE.md` imports this file, so Claude Code and Codex follow the same rules.

## Project
James Spooner's personal GIS and asset-management portfolio, written for potential employers. Astro (static output, TypeScript), hosted on GitHub Pages. Staging is the github.io address; jamesspooner.org moves here at launch (2026-11-30). Planning docs are in `docs/`; read them before building.

## Read first
- `docs/00-project-charter.md` (purpose, audience, scope)
- `docs/01-information-architecture.md` (routes, nav, linking rules)
- `docs/02-content-model.md` (front matter, validation rules)
- `docs/04-design-system.md` (tokens, components, accessibility)
- `docs/09-build-plan.md` (current milestone and tasks)
- `docs/11-decisions-log.md`

## Commands
- `npm run dev`, `npm run build`, `npm run lint`, `npm test`
(Update this list once M1 is set up.)

## Rules
- Work on one task from `docs/09-build-plan.md` at a time, on the milestone's branch.
- Content lives in `content/` as markdown or YAML; front matter is validated by the content-collection schemas.
- Use the design tokens in `docs/04-design-system.md`; do not hard-code colours or spacing.
- Canadian spelling in all copy and UI text (colour, centre, organisation). `lang="en-CA"`.
- Every image needs alt text. Meet WCAG 2.2 AA. Ship no JavaScript on a page unless the feature needs it.
- Respect the `site` and `base` settings: build internal links and asset paths so they work under the github.io sub-path and on the custom domain.
- Never publish a project with `clearance: pending`; never add real names, locations or sensitive layers to a `redacted` project. Do not work around the build check.
- Never commit secrets or client/community data.
- Do not add dependencies or change the stack without asking; log decisions in `docs/11-decisions-log.md`.
- Run lint, tests and build before saying a task is done.
