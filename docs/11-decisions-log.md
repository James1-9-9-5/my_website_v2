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
