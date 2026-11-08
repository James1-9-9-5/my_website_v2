# 09 - Build Plan

## Milestones
| # | Milestone | Done when |
|---|-----------|-----------|
| M1 | Repo and skeleton | Project builds locally, deploys to the github.io staging address, nav and layout in place, all routes render |
| M2 | Design system | Tokens, self-hosted font, header, footer, project card, case-study layout, collapsible role built; contrast and keyboard checks pass |
| M3 | Core pages | Home, Experience, Skills & Education, Beyond the Map, Contact built with real content migrated from the current site; CV PDF linked |
| M4 | Case studies | 3 case studies (PR1-PR3) written and published as `cleared` or `redacted`, covers and visuals in place |
| M5 | Polish and launch | SEO, accessibility and performance checks (doc 07) pass on staging; jamesspooner.org moved to the new repo; old site retired |

Clearance requests for PR1-PR3 (doc 08) go out during M1, since approval is the step most likely to take longer than the build.

## Task breakdown (M1)
- [ ] Create Astro project (TypeScript) and commit
- [ ] Add `.nvmrc` (current Node LTS), lint config, tsconfig
- [ ] Set `site` and `base` for the github.io staging address
- [ ] Add content collections and schemas (doc 02 validation rules)
- [ ] Stub every route in doc 01 with a placeholder page
- [ ] Add GitHub Action for Pages (check Astro's current deployment guide first)
- [ ] Confirm the staging URL works, including links and images under the sub-path
- [ ] Send clearance requests for PR1-PR3

## Working agreement
- One branch per milestone, merged by pull request.
- One GitHub Issue per task; track on a GitHub Projects board.
- Update docs/11-decisions-log.md whenever a decision changes the plan.

## Timeline
Launch: 2026-11-30 (D8).

| Milestone | Target date |
|-----------|-------------|
| M1 | 2026-11-11 |
| M2 | 2026-11-15 |
| M3 | 2026-11-20 |
| M4 | 2026-11-25 |
| M5 | 2026-11-30 |

Buffer: M5 has five days for checks, fixes and the domain cutover. If case-study clearance slips, publish `redacted` versions (doc 08) rather than moving launch.
