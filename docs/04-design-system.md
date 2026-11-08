# 04 - Design System

## Principles
- Grounded and clear: charcoal and sage, generous whitespace, nothing decorative for its own sake
- Content first; maps, screenshots, and photos carry the personality
- Accessible by default (WCAG 2.2 AA minimum)
- Canadian spelling throughout: -our and -re like UK (colour, centre, favourite), but -yze and -ize like US (analyze, organization, modelled keeps the double L). Set `lang="en-CA"` on the page and `og:locale` to `en_CA`.
- Visual continuity with the current site (jamesspooner.org): same colours, fonts, pill buttons, contour-line hero and collapsible roles.

## Tokens (CSS variables)
Values taken from the current site's `style.css` (James1-9-9-5.github.io). The old names are noted so the two can be compared.

```css
:root {
  /* colour: dark surfaces (nav, hero, contact, footer) */
  --charcoal: #2b2b2b;             /* old --char */
  --on-charcoal: #ffffff;          /* active nav, headings on dark */
  --on-charcoal-muted: #d6dfd3;    /* inactive nav */
  --on-charcoal-soft: #c8d4c4;     /* taglines, ledes, footer text on dark */
  --on-charcoal-body: #e8eee6;     /* hero summary */
  --sage: #a8c3a0;                 /* old --sage: active underline, title bar, accents on dark */

  /* colour: light surfaces */
  --bg: #ffffff;                   /* page body */
  --bg-alt: #f1f5ef;               /* old --mist: alternate sections */
  --surface: #e4ece1;              /* image placeholders, tool strip */
  --line: #dfe6dc;                 /* card borders, role dividers, chips */
  --text: #2b2b2b;
  --text-muted: #556055;           /* old --muted */
  --sage-dark: #5f7857;            /* old --sage-d: button fill, borders, focus ring on light */
  --sage-darker: #4d6446;          /* links and coloured text on light; button hover */
  --on-sage-dark: #ffffff;

  /* type */
  --font-body: "Source Sans 3", system-ui, -apple-system, "Segoe UI", sans-serif;   /* 400, 600, 700 */
  --font-heading: "Bricolage Grotesque", "Source Sans 3", system-ui, sans-serif;    /* 600, 700 */
  --step--1: 0.875rem;
  --step-0: 1.05rem;               /* body size on the current site */
  --step-1: 1.25rem;
  --step-2: 1.563rem;
  --step-3: clamp(1.8rem, 4vw, 2.4rem);    /* section titles */
  --step-4: clamp(2.4rem, 6vw, 3.6rem);    /* page H1 */
  --leading-body: 1.6;
  --leading-heading: 1.15;

  /* space */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 2rem;
  --space-5: 4.5rem;               /* section padding (72px), 56px under 860px */
  --space-6: 6rem;

  /* layout */
  --content-width: 72ch;           /* reading text */
  --wide-width: 1040px;            /* matches current .wrap */
  --gutter: 24px;
  --nav-height: 60px;
  --radius: 10px;                  /* cards, photos */
  --radius-pill: 999px;            /* buttons, chips */
  --border-width: 3px;
}
```

Fonts: self-host both families with Fontsource (`@fontsource/source-sans-3`, `@fontsource/bricolage-grotesque`) instead of Google Fonts.

Icons: the current site loads all of Font Awesome from a CDN for about six icons (envelope, download, LinkedIn, GitHub, location pin). Replace with inline SVGs in an `Icon` component: no external request, no dependency.

## Contrast checks (calculated for the values above)
| Pair | Ratio | Use |
|------|-------|-----|
| White on charcoal | 14.2:1 | Active nav, headings on dark |
| `--on-charcoal-muted` on charcoal | 10.4:1 | Inactive nav |
| `--on-charcoal-soft` on charcoal | 9.2:1 | Taglines, ledes, footer |
| `--sage` on charcoal | 7.4:1 | Underline, accents on dark |
| Text on white / on `--bg-alt` | 14.2:1 / 12.8:1 | Body text |
| Muted text on white / on `--bg-alt` | 6.6:1 / 6.0:1 | Captions, dates |
| `--sage-darker` on white / `--bg-alt` / `--surface` | 6.5:1 / 5.9:1 / 5.4:1 | Links, company names, coloured labels |
| White on `--sage-dark` | 4.9:1 | Button text |
| `--sage-dark` on `--bg-alt` | 4.4:1 | **Fails for text.** The current site uses this for company names in Experience; use `--sage-darker` instead |
| `--sage-dark` on charcoal | 2.9:1 | Fails even for focus rings; on dark surfaces use `--sage` |

## Dark mode
Not in v1 (decision D3: later). The header and footer are already dark, so a dark theme is mostly a second set of the light-surface tokens under `prefers-color-scheme: dark`.

## Layout
- Page sections are full width, with content centred in `--wide-width`. Long text stays within `--content-width`.
- Alternate section backgrounds between `--bg` and `--bg-alt`, as on the current site.
- Breakpoints to test: 360, 768, 1280 px. The current site switches layouts at 860 px.
- Navigation tabs are centred and sticky. The current page has a `--border-width` inset underline in `--sage` and `aria-current="page"`. A `--sage-dark` 3px rule sits under the nav.

## Components
| Component | Notes |
|-----------|-------|
| Header + nav | Sticky charcoal bar, centred tabs, bold labels, skip-to-content link first in the DOM. Under 860 px: name on the left and a Menu button (a `<details>` element, so it works without JavaScript) that drops down the full list |
| Hero | Charcoal with the contour-line SVG background from the current site. Round profile photo (180 px, `--sage-dark` border), name as H1, tagline "GIS Specialist. Adventure enthusiast. Professional map nerd.", summary, and three actions: Get in touch, Resume, LinkedIn |
| Section title | Heading with a 48×4 px `--sage` bar beneath |
| At a glance strip | Four facts under the hero (years in GIS, countries, core tools, current role), from `glance` in `home.md`; years are calculated at build time from `gisSince`. Replaces the "What you'll find here" row, which repeated the nav |
| Closing call to action | "Let's talk" band at the bottom of Home with Get in touch and Resume |
| Project card | Cover image (16:10), title, outcome subtitle, 1-2 line summary, "Read case study" link |
| Project grid | `auto-fit, minmax(270px, 1fr)`: 3 columns on desktop, 1 on mobile |
| Case-study layout | Title block, then Problem, Approach, Tools (chips linking to Skills), Outcome, visuals, related role link |
| Experience role | Two columns (meta 270 px, details), collapsing to one under 860 px. Collapsible `<details>`/`<summary>`; the newest role is open by default. Meta shows dates, duration in yrs/mos (counted inclusively, like LinkedIn, calculated at build time), and location with a pin icon |
| Chips | Pill tags on white with a `--line` border; used for skills and case-study tools |
| Skills strip | Grouped chips. Stays on a single line at desktop widths; wraps on narrow screens |
| Story rows | Beyond the Map: alternating text-and-photo rows (photo right, then left), photo column 220-300 px, stacking to one column under 860 px. Replaces the four-photo row in the earlier plan to match the current site |
| Image lightbox | Beyond the Map photos open larger in a native `<dialog>`. Without JavaScript the link opens the large image directly |
| Confidentiality note | Muted text with a 4 px `--sage-dark` left border, under the project grid |
| Buttons | Pill, `--sage-dark` fill, white bold text, hover `--sage-darker`. Icon buttons: 38 px white circles (raise to 44 px for touch) |
| Contact page | Short intro (body of `contact.md`) with Get in touch and Download CV, beside a details card: email, LinkedIn, GitHub, location, CV |
| Footer | Charcoal, email, LinkedIn, GitHub, Resume, then copyright, location and "Last updated" (build month) |
| Link preview image | `public/og-image.jpg`, 1200×630: photo, name, title, one-line summary on charcoal with contour rings |

## Accessibility and motion
- Visible focus on every interactive element: 3px outline in `--sage-dark` on light, `--sage` on dark, with a 3 px offset.
- Touch targets at least 44 px (the current icon buttons are 38 px).
- Respect `prefers-reduced-motion`: no smooth scrolling, parallax or animated chevrons.
- Collapsible roles must work by keyboard and be readable without JavaScript.

## Checks before a milestone is done
- Contrast ratios re-checked after any colour change
- Layout tested at 360, 768, 1280 px
- Keyboard-only walkthrough of the nav, collapsibles, and buttons
