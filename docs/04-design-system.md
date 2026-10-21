# 04 - Design System

## Principles
- Grounded and clear: charcoal and sage, generous whitespace, nothing decorative for its own sake
- Content first; maps, screenshots, and photos carry the personality
- Accessible by default (WCAG 2.2 AA minimum)
- Canadian spelling throughout (colour, centred, grey). Set `lang="en-CA"` on the page and `og:locale` to `en_CA`.

## Tokens (CSS variables)
Hex values are estimated from the current nav bar. Replace with the exact values from the current `style.css`, then re-run the contrast checks below.

```css
:root {
  /* colour: dark surfaces (header, footer) */
  --charcoal: #2b2b2b;
  --on-charcoal: #ffffff;          /* active nav, headings on dark */
  --on-charcoal-muted: #d8e0cf;    /* inactive nav, body text on dark */
  --sage-light: #a8c09a;           /* active underline, accents on dark */
  --sage-mid: #6b8a64;             /* decorative borders only, never text */

  /* colour: light surfaces (page body) */
  --bg: #f6f7f3;
  --surface: #e4eadd;              /* cards, tool strip */
  --text: #222222;
  --text-muted: #5a5a55;
  --sage-dark: #3f5e3a;            /* links and buttons on light */
  --on-sage-dark: #ffffff;

  /* type */
  --font: "Source Sans 3", system-ui, -apple-system, "Segoe UI", sans-serif;
  --step--1: 0.875rem;
  --step-0: 1rem;
  --step-1: 1.25rem;
  --step-2: 1.563rem;
  --step-3: 1.953rem;
  --step-4: 2.441rem;
  --step-5: 3.052rem;
  --leading-body: 1.6;
  --leading-heading: 1.2;

  /* space */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 2rem;
  --space-5: 4rem;
  --space-6: 6rem;

  /* layout */
  --content-width: 72ch;           /* reading text */
  --wide-width: 1100px;            /* grids, photo rows */
  --radius: 12px;
  --border-width: 3px;
}
```

Self-host the font (for example via the Fontsource package) instead of loading it from Google, to avoid an external request and keep performance up. The nav text in the screenshot looks like Source Sans, so confirm which font the current site uses.

## Contrast checks (calculated for the values above)
| Pair | Ratio | Use |
|------|-------|-----|
| White on charcoal | 14.2:1 | Active nav, dark headings |
| Muted sage-grey on charcoal | 10.4:1 | Inactive nav, text on dark |
| Light sage on charcoal | 7.2:1 | Underline, accents on dark |
| Text on page background | 14.8:1 | Body text |
| Muted text on page background | 6.4:1 | Captions, dates |
| Dark sage on page background | 6.8:1 | Links, button fill |
| White on dark sage | 7.3:1 | Button text |
| Mid sage on charcoal | 3.7:1 | Decorative border only; below the 4.5:1 text minimum, so never use it for text |

## Dark mode
Not in v1 (decision D3 in doc 11: "later"). The header and footer are already dark, so a dark theme is mostly a second set of the "light surface" tokens under `prefers-color-scheme: dark`.

## Layout
- Page sections are full width, with content centred in `--wide-width`. Long text stays within `--content-width`.
- Breakpoints to test: 360, 768, 1280 px.
- Navigation tabs are centred. The current page has a `--border-width` underline in `--sage-light` and `aria-current="page"`. A `--sage-mid` rule sits under the header.

## Components
| Component | Notes |
|-----------|-------|
| Header + nav | Charcoal bar, centred tabs, bold labels, skip-to-content link first in the DOM. On narrow screens, collapse into a menu button |
| Hero | Profile photo, name, tagline, intro, and three actions: Get in touch, Resume, LinkedIn (footer repeats its own) |
| Section links row | "What you'll find here": one link card per section |
| Project card | Cover image, section tag, title, outcome subtitle, 1-2 line summary |
| Project grid | Responsive cards, 3 columns on desktop, 1 on mobile |
| Case-study layout | Title block, then Problem, Approach, Tools, Outcome, visuals, related role link |
| Experience role | Collapsible (`<details>`/`<summary>`) showing title, organisation, dates, duration in years and months, and location. Duration is calculated at build time from the doc 02 dates |
| Skills strip | Grouped tool names on `--surface`. Stays on a single line at desktop widths. On narrow screens, allow it to scroll horizontally or wrap; decide when building |
| Photo row | Beyond the Map: four photos in one row at desktop width (equal heights), stacking in 2 columns on tablet and 1 on mobile. Every photo has alt text |
| Confidentiality note | Small muted text under the project grid: many projects are confidential or under NDA, further detail on request |
| Contact block | One line inviting a conversation, plus the Resume and LinkedIn buttons |
| Footer | Charcoal, copyright, contact links |

## Accessibility and motion
- Visible focus on every interactive element: 3px outline in `--sage-dark` on light, `--sage-light` on dark, with an offset.
- Touch targets at least 44 px tall.
- Respect `prefers-reduced-motion`: no parallax or auto-playing animation.
- Collapsible roles must work by keyboard and be readable without JavaScript.

## Checks before a milestone is done
- Contrast ratios re-checked after any colour change
- Layout tested at 360, 768, 1280 px
- Keyboard-only walkthrough of the nav, collapsibles, and buttons
