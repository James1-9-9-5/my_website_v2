# 02 - Content Model

All content lives as markdown files with front matter under `content/`.

## Shared fields
| Field | Type | Notes |
|-------|------|-------|
| title | string | Short, specific |
| subtitle | string | The outcome, e.g. "Cutting field-data cleanup from days to hours" |
| summary | string | 1-2 sentences, problem then outcome. Used on cards and in SEO description |
| section | enum | work / playbook / lab |
| date | date | Last meaningful update |
| tags | string[] | e.g. gis, asset-management, web-mapping |
| featured | boolean | Shows on home |
| cover | path | Image in `public/` or optimised from `media-source/` |
| coverAlt | string | Required for accessibility |
| draft | boolean | Hidden from build when true |

## Work (case study) body template
1. **Context:** who, what situation (cleared for publication)
2. **Problem:** what was broken or missing
3. **Approach:** methods, tools, decisions
4. **Result:** outcome, ideally measurable
5. **What I'd do differently** (optional)
6. **Visuals:** maps, diagrams, screenshots

## Playbook body template
1. **When to use this**
2. **The approach** (steps)
3. **Pitfalls**
4. **Example** (link to a case study)

## Lab body template
1. **What I built and why**
2. **How it works**
3. **Try it / source link**
4. **What I learned**

## Validation
Front matter is validated at build time (schema in the framework's content config). Missing `coverAlt` or `summary` should fail the build.
