# AGENTS.md

Instructions for AI coding assistants working in this repo.

## Project
Personal professional website (GIS and asset-management portfolio). Static site hosted on GitHub Pages. Planning docs are in `docs/`; read them before building.

## Read first
- `docs/00-project-charter.md`
- `docs/03-technical-architecture.md`
- `docs/04-design-system.md`
- `docs/09-build-plan.md` (current milestone)
- `docs/11-decisions-log.md`

## Commands
- `npm run dev`, `npm run build`, `npm run lint`, `npm test`
(Update this list once the framework is set up.)

## Rules
- Work on one task from `docs/09-build-plan.md` at a time.
- Keep content in markdown under `content/`; validate front matter against the schema.
- Follow the design tokens in `docs/04-design-system.md`; do not hard-code colours or spacing.
- Every image needs alt text. Meet WCAG AA.
- Do not add dependencies or change the stack without asking; log decisions in `docs/11-decisions-log.md`.
- Never commit secrets or client/community data. Do not publish anything marked "Permission: no" in `docs/08-content-inventory.md`.
- Run lint, tests and build before saying a task is done.
