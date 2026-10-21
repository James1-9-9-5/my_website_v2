# 02 - Content Model

All content lives under `content/` as markdown files with front matter, or as small data files (YAML). Page structure is in doc 01. The content below is based on the existing site (jamesspooner.org), reorganised into the new structure.

## Content types at a glance
| Type | Where | Format | Becomes |
|------|-------|--------|---------|
| Home | `content/pages/home.md` | Markdown | `/` |
| Experience | `content/experience/*.md` | One file per role | `/experience` (single page, one block per role) |
| Projects | `content/projects/*.md` | One file per project | `/projects` and `/projects/[slug]` |
| Skills | `content/data/skills.yaml` | Data | Skills section of `/skills-education` |
| Education | `content/data/education.yaml` | Data | Education section of `/skills-education` |
| Beyond the Map | `content/pages/beyond-the-map.md` | Markdown with inline images | `/beyond-the-map` |
| Contact | `content/pages/contact.md` | Markdown | `/contact` |

## Home (`home.md`)
| Field | Type | Notes |
|-------|------|-------|
| headline | string | Outcome-focused, one sentence: who I help and what I deliver |
| tagline | string | Short personality line (currently "GIS Specialist. Adventure enthusiast. Professional map nerd.") |
| intro | string | 2-3 sentences |
| heroImage / heroAlt | path / string | Alt text required |
| video, poster, videoCaption | optional | Short intro video, if I make one |
| featuredCount | number | How many featured projects to show (3-6) |

The "What you'll find here" row is generated from the nav, and the featured grid from projects with `featured: true`.

## Experience (one file per role)
| Field | Type | Notes |
|-------|------|-------|
| role | string | e.g. GIS Specialist |
| organization | string | e.g. Tapestry Research Group |
| location | string | City, country |
| startDate | date | Month and year |
| endDate | date or empty | Empty means "Present" |
| kind | enum | `role` or `summary` (use `summary` for the grouped "Earlier roles" entry) |
| id | string | Short id that projects link to, e.g. `tapestry` |
| draft | boolean | Hidden when true |

Body: 3-5 bullets, each leading with what I did and the result. Put numbers in where I can (e.g. a KPI hit, backlog reclaimed). Sorted newest first by `startDate`.

## Projects (case studies)
| Field | Type | Notes |
|-------|------|-------|
| title | string | Short name, e.g. "Asset Management Systems" |
| subtitle | string | The outcome, in the form "what changed", e.g. "From scattered inspections to one live maintenance workflow" |
| summary | string | 1-2 sentences, problem then outcome. Used on cards and as the SEO description |
| role | string | `id` of the Experience entry it came from |
| tools | string[] | Must match names in `skills.yaml` (e.g. PostgreSQL/PostGIS, ArcGIS Pro) |
| tags | string[] | e.g. asset-management, lidar, automation |
| date | date | Last meaningful update |
| featured | boolean | Shows on home |
| order | number | Manual sort within Projects |
| cover / coverAlt | path / string | Alt text required |
| clearance | enum | `cleared`, `redacted`, or `pending` (see below) |
| draft | boolean | Hidden when true |

Body template:
1. **Problem:** what was broken or missing
2. **Approach:** methods, design decisions
3. **Outcome:** what changed, with a measurable result where cleared
4. **What I'd do differently** (optional)
5. **Visuals:** maps, diagrams, screenshots (redacted where needed)

"Tools" is displayed from the front matter, not typed in the body, so each tool can link to the Skills section.

Starting set from the current site: Asset Management Systems, LiDAR Analysis Workflow, Spatial Data Automation.

### Clearance
- `cleared`: client or community has approved publication.
- `redacted`: published with names, locations or sensitive layers removed or generalised.
- `pending`: not approved yet. A `pending` project cannot be published (the build fails).
- Keep the existing site-wide note that many projects are confidential or under NDA, and that further detail is available on request. Show it at the bottom of the Projects index.
- For work with First Nations communities, follow each community's data-governance requirements (for example OCAP principles) before changing a project to `cleared`.

## Skills (`skills.yaml`)
```yaml
- group: GIS software
  items: [ArcGIS Pro, ArcGIS Online, Field Maps, Survey123, QuickCapture, Dashboards, QGIS]
- group: Data & programming
  items: [PostgreSQL / PostGIS, SQL (MySQL), Python / ArcPy, ArcGIS API for Python, ModelBuilder, Power Automate, Microsoft Office]
- group: Field & remote sensing
  items: [LiDAR processing, DTM / DSM / CHM, Tree detection, Volumetric modelling, Spatial analysis, Data analysis]
```

## Education (`education.yaml`)
Fields per entry: `qualification`, `institution`, `startYear`, `endYear`. Currently two entries: BSc (Hons) Geography, and the International Baccalaureate.

## Beyond the Map (`beyond-the-map.md`)
| Field | Type | Notes |
|-------|------|-------|
| title | string | Beyond the Map |
| summary | string | 1-2 sentences, used for SEO |

Body: the personal story in short sections, with images inline. Every image needs alt text and, where useful, a caption. Suggested arc: how I found GIS, what I do outside work, the people thread that ties it together. Proofread the copy when migrating it from the current site.

## Contact (`contact.md`)
| Field | Type | Notes |
|-------|------|-------|
| intro | string | One line inviting a conversation |
| linkedin | url | |
| email | string | Decide: show a mailto link, or use a contact form later |
| resumePdf | path | Downloadable CV; version the filename |

## Validation
Front matter is validated at build time against a schema in the framework's content config. The build fails when:
- `summary`, `coverAlt`, or any image alt text is missing
- a project's `clearance` is `pending` and it is not a draft
- a project's `role` does not match an Experience `id`
- a project tool is not in `skills.yaml` (warning only)
