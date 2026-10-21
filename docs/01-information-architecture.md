# 01 - Information Architecture

## Sitemap
```
/                      Home
/experience            Experience (roles, responsibilities, outcomes)
/projects              Projects index (case studies)
/projects/[slug]       Project case study
/skills-education      Skills & Education
/beyond-the-map        Beyond the Map (the person outside the work)
/contact               Contact
/404                   Not found
```

## Navigation
- Primary (in this order): Home, Experience, Projects, Skills & Education, Beyond the Map, Contact
- Current page is marked with an underline and `aria-current="page"`
- Utility: LinkedIn / GitHub / email icon links
- Accessibility: "Skip to main content" link first in the DOM
- Footer: [copyright, contact, links]

## Page purposes
| Page | Purpose | Layout |
|------|---------|--------|
| Home | Say who I help and what I deliver; route visitors onward | Single page |
| Experience | Show career history and what I achieved in each role | Single page, one section per role |
| Projects | Prove capability through case studies | Index + one page per project |
| Skills & Education | Tools, methods, credentials, training | Single page |
| Beyond the Map | The person behind the work | Single page |
| Contact | Make it easy to get in touch | Single page |

CV: [decide: a downloadable PDF linked from Experience and Skills & Education, or its own /cv page]

## Home page order
1. Headline + intro paragraph
2. Media block (image or short video)
3. "What you'll find here" row linking to each section
4. Featured projects grid

## Page-to-page linking rules
- Every project links to the role it came from on the Experience page.
- Every project lists the key skills it used, linking to Skills & Education.
- Featured projects are chosen manually in front matter (`featured: true`).

## URL rules
- Lowercase, hyphenated. No dates in URLs.
- Only Projects uses a `[slug]` (a different page per project). The other sections are single pages.
- Slugs never change after launch (redirect if they must).
