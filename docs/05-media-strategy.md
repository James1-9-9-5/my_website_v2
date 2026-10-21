# 05 - Media Strategy

## Sources and outputs
- Originals live in `media-source/{home,about,work}` (not deployed, consider Git LFS if large).
- A script in `scripts/` converts to optimised WebP/AVIF at set widths into `public/media/`.
- Videos: short, compressed MP4/WebM, with a poster image and captions.

## Rules
- Every image has meaningful alt text (`coverAlt` in front matter).
- Max display widths: hero [1600px], card [800px], inline [1200px].
- Set width/height to prevent layout shift; lazy-load below the fold.
- Cache-bust with a version query or content hash.

## Maps and GIS visuals
- Screenshots: remove or generalise sensitive layers (see doc 08).
- Interactive maps: GeoJSON kept small (simplify geometry), no sensitive coordinates.
- Always include a text description of what the map shows.

## Shot list
| Page | Asset | Status |
|------|-------|--------|
| Home | Headshot or intro video | [ ] |
| About | Portrait | [ ] |
| Work | One cover per case study | [ ] |
