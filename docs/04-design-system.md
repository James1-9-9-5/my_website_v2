# 04 - Design System

## Principles
- [3 adjectives, e.g. clear, grounded, precise]
- Content first; maps and visuals do the talking
- Accessible by default (WCAG AA minimum)

## Tokens (CSS variables)
```css
:root {
  /* colour */
  --bg: [#]; --surface: [#]; --text: [#]; --muted: [#];
  --accent: [#]; --accent-contrast: [#];
  /* type */
  --font-heading: [font], system-ui, sans-serif;
  --font-body: [font], system-ui, sans-serif;
  --step-0: 1rem; --step-1: 1.25rem; --step-2: 1.563rem; --step-3: 1.953rem; --step-4: 2.441rem;
  /* space */
  --space-1: .25rem; --space-2: .5rem; --space-3: 1rem; --space-4: 2rem; --space-5: 4rem;
  /* layout */
  --content-width: 72ch; --radius: 12px;
}
```

## Dark mode
[yes / no / later]. If yes, define a second token set under `prefers-color-scheme: dark`.

## Components
- Header + nav (with skip link)
- Hero (headline, intro, media)
- Section links row
- Card (section tag, title, subtitle, summary)
- Card grid
- Case-study layout (title block, body, visuals, related links)
- Map embed
- Footer

## Checks
- Text contrast 4.5:1 or better
- Visible focus styles
- Layout tested at 360, 768, 1280 px
