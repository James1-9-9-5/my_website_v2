# 05 - Media Strategy

## Sources and outputs
- Originals live in `media-source/{home,projects,beyond-the-map}` (not deployed; consider Git LFS if large).
- A script in `scripts/` converts to optimised WebP/AVIF at set widths into `public/media/`.
- Videos (optional in v1): short, compressed MP4/WebM, with a poster image and captions.

## Rules
- Every image has meaningful alt text (`heroAlt`, `coverAlt`, or inline alt in markdown).
- Max display widths: hero 1600px, card 800px, inline 1200px.
- Set width/height to prevent layout shift; lazy-load below the fold.
- Cache-bust with a version query or content hash.

## Maps and GIS visuals
- Screenshots: remove or generalise sensitive layers (see doc 08).
- No interactive maps in v1. When added (v2), keep GeoJSON small (simplified geometry) and free of sensitive coordinates.
- Always include a text description of what the map shows.

## Shot list
| Page | Asset | Status |
|------|-------|--------|
| Home | Headshot (`profile.jpeg`) | [x] |
| Home | Default share image (Open Graph, 1200x630) | [ ] |
| Projects | Cover: Asset Management Systems (current thumbnail) | [x] |
| Projects | Cover: LiDAR Analysis Workflow (current thumbnail) | [x] |
| Projects | Cover: Spatial Data Automation (current thumbnail) | [x] |
| Projects | 1-3 inline visuals per case study (optional at launch; current covers used, D14) | [ ] |
| Beyond the Map | Five story-row photos (from current site) | [x] |
| Contact / all | CV PDF, versioned filename (`james-spooner-cv-2026-11.pdf`) | [x] |
