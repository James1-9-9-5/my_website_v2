# 11 - Decisions Log

Add a new row whenever a decision is made or changed. Newest at the bottom.

| # | Date | Decision | Options considered | Why | Status |
|---|------|----------|--------------------|-----|--------|
| D1 | before 2026-10-20 | Host on GitHub Pages | Pages, Netlify, Vercel | Already on GitHub, free | Accepted |
| D2 | before 2026-10-20 | Framework: Astro (static output) | Astro, Next.js static export | Mostly content, little interactivity; Astro ships almost no JS by default and content collections fit the doc 02 model directly | Accepted |
| D3 | 2026-11-08 (revised) | Dark mode: later (v2) | Yes, no, later | Not needed for launch; header and footer are already dark, so it's a second set of light-surface tokens later | Accepted |
| D4 | 2026-11-08 (closed) | Custom domain: yes, keep jamesspooner.org | Yes, no | Already owned and in use; cutover handled by D5 | Accepted |
| D5 | 2026-10-20 | Build and test on the GitHub Pages address first; move jamesspooner.org to the new repo at launch | Cut over immediately, staged launch | Keeps the current site live until the new one passes launch checks | Accepted |
| D6 | 2026-11-08 | Audience: potential employers only | Employers only; employers + clients/communities + collaborators | The site's purpose is to send to employers; one audience keeps the calls to action simple | Accepted |
| D7 | 2026-11-08 | CV as a downloadable PDF, no `/cv` page | PDF, `/cv` page, both | Employers expect a file they can save and forward; Experience page already covers the web version | Accepted |
| D8 | 2026-11-08 | Launch by 2026-11-30 | | Target set by James | Accepted |
| D9 | 2026-11-08 | v1 creative features: none required; intro video optional | See doc 06 | Fits the launch date; maps and filters move to v2 | Accepted |
| D10 | 2026-11-08 | Starting case studies: Asset Management Systems, LiDAR Analysis Workflow, Spatial Data Automation | | Carried over from the current site; confirmed by James | Accepted |
| D11 | 2026-11-08 | Use `cleared` / `redacted` / `pending` everywhere for publication status | Checkboxes, yes/no, clearance enum | One vocabulary across docs 02, 08 and 10, matching the build rule | Accepted |
| D12 | 2026-11-08 | AI assistant: Claude Code, with AGENTS.md as the shared rules file | Claude Code, Codex, both | CLAUDE.md already imports AGENTS.md, so switching later costs nothing | Accepted |
| D13 | 2026-11-08 | Launch with the current CV PDF; replace it later | Current CV, new CV before launch | Not blocking launch; James is happy with it for now | Accepted |
| D14 | 2026-11-08 | Use the current 486×300 project images as covers for launch | Current images, new larger visuals | Good enough for cards; replace with larger visuals after launch | Accepted |
| D15 | 2026-11-08 | Leave out the old section icons and the bungee video in v1 | Use on Home / Beyond the Map, leave out | The four icons map to the old sections, not the new ones; a 15 MB video costs performance and adds little for employers. Originals stay in the old repo | Accepted |
| D16 | 2026-11-08 | Bring launch forward to 2026-11-08 | Launch 30 Nov, launch now | James wants it live now; case studies launch with existing content and expand later | Accepted |
| D17 | 2026-11-08 | Astro 7 (latest), Node 22, no extra dependencies beyond fonts | Astro 5/6, Astro 7 | Current release; only Fontsource fonts and the type checker added | Accepted |
| D18 | 2026-11-08 | Optimise images with Astro's built-in pipeline instead of a custom script | Script in `scripts/`, `astro:assets` | Same result, nothing to maintain | Accepted |
| D19 | 2026-11-08 | Experience id = file name; Beyond the Map rows in front matter | Separate id field, inline images | Fewer fields to keep in sync; supports the alternating photo layout | Accepted |
| D20 | 2026-11-08 | All three case studies published as `redacted` | cleared, redacted | James approved; no client or community names or locations are shown | Accepted |
| D21 | 2026-11-08 | Design polish pass: smaller hero headline, phone menu, At a glance strip, Let's talk band, Contact page layout, shorter page headers, link preview image, card hover, photo lightbox, footer date | | Make the launched site look finished; content items (project visuals, fuller case studies, Tapestry metrics) left for James | Accepted |
| D22 | 2026-11-08 | Hero photo collage (portrait + field office + Bolivia) instead of one round headshot; favicon rebuilt with transparent corners plus an SVG version | Single headshot, slideshow, collage | A static collage shows work and personality at a glance without motion or extra JavaScript | Accepted |
| D23 | 2026-11-08 | Hero becomes a crossfading photo background (replaces the collage in D22); real LinkedIn and GitHub logos | Collage, single photo, crossfade | James wants the hero itself to show photos; CSS-only crossfade, no JavaScript, still with motion turned off | Accepted |
| D24 | 2026-11-08 | Hero uses five free stock photos (Lions Gate, Garibaldi Lake, orcas, Lake O'Hara, black bear) instead of Beyond the Map photos | Reuse personal photos, stock, own maps | Keeps Beyond the Map photos for their story; own public-data maps of London, Vancouver and Cape Town to replace stock later | Accepted |
| D25 | 2026-11-08 | Hero H1 is the name; the headline becomes a medium-weight statement below it; hero height reduced | Headline as H1, name as H1 | The headline was the biggest, boldest line and the name the smallest, so there was no clear reading order; leading with the name also matches what employers search for | Accepted |
| D26 | 2026-11-08 | Hero text trimmed: headline and intro merged into one statement ("I build asset management and maintenance systems with First Nations communities, and train local teams to run them."); intro removed | Keep both lines, merge | The two lines made the same point; the merged line is shorter and ends on what sets James apart | Accepted |
