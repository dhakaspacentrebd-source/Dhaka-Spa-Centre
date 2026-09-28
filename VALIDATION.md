# Validation — 28 September 2026

## Automated checks

| Check | Result |
|---|---|
| Production build | PASS — Next.js 16.3.6, 46 generated routes including metadata/system routes |
| TypeScript | PASS — `npm run typecheck` |
| ESLint | PASS — zero warnings/errors |
| Dependency audit after upgrade | 0 known vulnerabilities reported by npm |
| Content routes over HTTP | 39/39 return 200 |
| Unique titles | 39/39 |
| Unique descriptions | 39/39 |
| H1 count | Exactly one on all 39 content routes |
| Canonicals | Correct per-route localhost preview origin; production domain must be configured |
| JSON-LD | 200 JSON blocks parse successfully across the audited pages |
| Images | 187 rendered image elements have non-empty alt text |
| Internal links/assets | 43 unique linked paths return successfully |
| Sitemap | All 39 intended content routes included |
| Robots | Production rules allow crawling; Vercel preview configuration excludes indexing |
| Legacy aroma URL | HTTP 308 to `/services/aromatherapy-massage` |
| Unknown URL | HTTP 404 |
| Contact consistency | All audited phone and WhatsApp targets use +8801609875990 |
| Stale business data | No old telephone/address/domain or competitor brand leakage in rendered pages |

Reproduce HTTP checks with the production server on port 3000 and `node scratch/qa.cjs`. Results are saved in `scratch/qa-results.json`. Canonicals intentionally use localhost for this local test. A Vercel production build without `NEXT_PUBLIC_SITE_URL` now fails explicitly to prevent publishing localhost canonicals.

## Browser checks

- Homepage tested at 360, 390, 430, 768, 1024, 1280, 1440 and 1920 pixels: no page-level horizontal overflow.
- Services, prices, gallery, contact, FAQ, Banani guide and journal tested at 390 pixels: no page-level horizontal overflow.
- Mobile menu opens, navigates to Prices, and closes correctly.
- Hot stone duration selector changes 90 minutes / ৳7,500 to 120 minutes / ৳10,000. The generated WhatsApp URL includes the selected duration and guide price.
- FAQ disclosure opens and reveals the answer.
- Browser log inspection returned no warning/error entries during these interaction checks.
- Desktop and mobile screenshots saved under `previews/`.
- No external messages were sent and no real reservation was submitted.

## Performance work

Ten existing JPEGs (8,456,616 bytes combined) have WebP alternatives (1,407,334 bytes combined), approximately 83% smaller. Live pages reference WebP images through Next Image. The hero has priority loading and a reserved layout; below-fold images lazy-load. Fonts use Next Font; most content is statically generated with limited client components. No animation framework, live map embed or third-party tracking script is loaded.

Lighthouse scores, field Core Web Vitals, Search Console indexing and rich-result eligibility were not measured or claimed. Live-domain verification remains necessary after deployment. Image ownership, final prices, policies, opening hours, coordinates and official Maps listing require owner confirmation.
