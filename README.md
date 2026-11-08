# my_website_v2

Source for jamesspooner.org: James Spooner's GIS and asset-management portfolio, written for potential employers. Built with Astro, hosted on GitHub Pages.

Planning docs are in `docs/` (start with `00-project-charter.md`). Instructions for AI coding assistants are in `AGENTS.md`.

## Editing content
All words and images live in `content/`. You rarely need to touch `src/`.

| To change… | Edit |
|------------|------|
| Home headline, tagline, intro, photo | `content/pages/home.md` |
| A job | `content/experience/<role>.md` (file name = the id projects link to) |
| A case study | `content/projects/<slug>.md` (file name = the URL) |
| Skills / education | `content/data/skills.yaml`, `content/data/education.yaml` |
| Beyond the Map text and photos | `content/pages/beyond-the-map.md` |
| Email, LinkedIn, GitHub, CV file | `content/pages/contact.md` |
| CV PDF | put the new file in `public/`, then update `resumePdf` in `contact.md` |

Original images live in `media-source/`; Astro resizes and converts them to WebP at build time.

The build stops with an error if: a summary or any alt text is missing, a project's `clearance` is `pending` and it isn't a `draft`, or a project's `role` doesn't match a file in `content/experience/`.

## Commands
| Command | What it does |
|---------|--------------|
| `npm install` | First time only (needs Node 22.23+; see `.nvmrc`) |
| `npm run dev` | Local preview at http://localhost:4321/my_website_v2/ |
| `npm run build` | Build the site into `dist/` |
| `npm test` | Check the built site: titles, one H1 per page, alt text, broken internal links |
| `npm run lint` | Type and template check |

## First deploy (GitHub Pages address)
1. Push to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to go green.
4. Check the site at https://james1-9-9-5.github.io/my_website_v2/. Because your old site already uses jamesspooner.org, GitHub may redirect that address to https://jamesspooner.org/my_website_v2/. That's expected, and it's still the new site.

## Moving jamesspooner.org to this site
Do this only after the GitHub Pages address looks right. The old site stays live until step 2.

1. In this repo, set `const CUSTOM_DOMAIN = true;` in `astro.config.mjs`, and create a file `public/CNAME` containing one line: `jamesspooner.org`. Commit and push.
2. In the **old** repo (James1-9-9-5.github.io): **Settings → Pages → Custom domain**: click **Remove**. (A domain can only be attached to one Pages site.)
3. In **this** repo: **Settings → Pages → Custom domain**: enter `jamesspooner.org`, save, wait for the DNS check to pass, then tick **Enforce HTTPS**.
4. Re-run the deploy (Actions tab → Deploy to GitHub Pages → Run workflow) and load https://jamesspooner.org in a private window.

DNS records don't need changing: they point at GitHub Pages, not at a particular repo. If HTTPS takes a while, that's GitHub issuing the certificate (up to about an hour).

To undo: put the custom domain back on the old repo and set `CUSTOM_DOMAIN` back to `false` here.
