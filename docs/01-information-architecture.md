# 01 - Information Architecture

## Sitemap
```
/                      Home
/work                  Work index (case studies)
/work/[slug]           Case study
/playbook              Playbook index (how I work)
/playbook/[slug]       Playbook page
/lab                   Lab index (personal projects)
/lab/[slug]            Lab project
/about                 About
/cv                    CV (on-page + PDF download)
/404                   Not found
```

## Navigation
- Primary: Work, Playbook, Lab, About, CV
- Utility: LinkedIn / GitHub / email icon links
- Accessibility: "Skip to main content" link first in the DOM
- Footer: [copyright, contact, links]

## Home page order
1. Headline + intro paragraph
2. Media block (image or short video)
3. "What you'll find here" row linking to each section
4. Featured pages grid (mix of work, playbook, lab)

## Page-to-page linking rules
- Every case study links to 1-2 related Playbook pages.
- Every Playbook page links to at least one case study that shows it in practice.
- Featured pages are chosen manually in front matter (`featured: true`).

## URL rules
- Lowercase, hyphenated slugs. No dates in URLs.
- Slugs never change after launch (redirect if they must).
