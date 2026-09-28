# Dhaka Spa Centre

An original quiet-luxury website built on the existing Next.js App Router project. Ivory, charcoal-brown and restrained bronze; responsive editorial layouts; WhatsApp-first appointment enquiries.

## Run and validate

Use Node 20.9+ and npm. Install with `npm ci`, start with `npm run dev`, validate with `npm run lint` and `npm run typecheck`, and build with `npm run build`. Run the production build with `npm start`. The build uses Webpack deliberately for predictable compatibility with the existing Tailwind/PostCSS project. Google fonts are downloaded at build time and self-hosted by Next.js; the build needs access to Google Fonts.

The previous Next.js 14 dependency was upgraded after npm audit reported known vulnerabilities. The existing App Router, Tailwind and TypeScript architecture was retained. Route parameters now use the asynchronous API. See `VALIDATION.md` for final versions and actual verification results.

## Configuration

Copy `.env.example` to `.env.local` for local settings; configure the same public values in Vercel before the production build.

- `NEXT_PUBLIC_SITE_URL`: final HTTPS origin, without a trailing slash. **Required before launch.** No production domain was supplied. Local previews fall back to `http://localhost:3000`; never publish canonical URLs or a sitemap with that origin.
- `NEXT_PUBLIC_MAP_URL`: optional verified Google Maps listing URL. Defaults to an address search; no fabricated place ID or coordinates.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: optional Search Console verification token.
- `NEXT_PUBLIC_ENABLE_ANALYTICS`: disabled by default. If enabled, events are pushed to `window.dataLayer`; no analytics network provider is installed or loaded.
- `NEXT_PUBLIC_GA_ID`: reserved documentation field; intentionally unused until a real provider and privacy implementation are configured. Setting this alone does not activate GA.

Opening hours and coordinates are `null` in `data/business.ts` and omitted from structured data. Add verified values and corresponding visible UI/schema together if supplied later.

## Architecture and editing

- `data/business.ts`: business name, address, telephone, WhatsApp message builder, Telegram, domain and map. Change business details here; all live contact actions use this configuration.
- `data/services.ts`: one source for treatment names, descriptions, images, duration prices and FAQs. Prices are initial references, not owner-approved rates. Update all prices in this file only.
- `data/locations.ts`: differentiated location pages. Add a unique visitor purpose, original content, relevant service slugs and FAQs; the dynamic route and sitemap pick up additions automatically. Never invent branches.
- `data/blog.ts`: six practical guides. Add an entry with an original slug, title, excerpt and content sections. The journal, detail routes and sitemap update automatically.
- `data/faq.ts`: general booking and visit answers.
- `components`: shared brand, navigation, footer, treatment cards, FAQ, booking form/selector, page headings, location block and enquiry banners.
- `lib/seo.ts`: canonical, title, description and social metadata.
- `lib/schema.ts`: entity, service, article, FAQ and breadcrumb JSON-LD. Unverified offers/ratings/coordinates/hours are omitted.
- `app/sitemap.ts` and `app/robots.ts`: route discovery and crawler configuration.
- `app/globals.css`: responsive visual system and reduced-motion styles.

### Add a treatment

Add an entry to `SERVICES` with a unique slug, title, original description, image/alt text, duration prices and useful FAQs. Use `Enquire` and a null numeric price for unverified prices. Add related service recommendations deliberately. All known pages are generated from this data. Existing `aroma-body-massage` links redirect to `aromatherapy-massage`.

### Booking and analytics

WhatsApp, telephone and Telegram are external handoffs. The contact form creates a message locally; it does not store bookings or automatically send a message. A visible fallback link is provided if opening WhatsApp fails. No real booking was submitted during testing.

Optional events: `whatsapp_click`, `phone_click`, `telegram_click`, `booking_click`, `service_view`, `price_view`, `directions_click`. Payloads contain event/path only, not guest names or messages. Enable tracking only after connecting the intended consumer and updating privacy information as appropriate.

## Assets

Existing project images were reused as **illustrative** assets, not claimed as verified premises photography. The gallery states this clearly. No images were downloaded from either competitor. Ownership/licensing documentation was not present; confirm rights before public release or replace with owned photos. WebP versions reduce the ten source images from about 8.46 MB to 1.41 MB combined. Original JPEGs are retained.

An original minimal DS monogram and wordmark are supplied in `public/brand/logo.svg`, `logo-dark.svg`, `logo-light.svg` and `logo-mark.svg`. SVG/ICO favicons, Apple touch and web app PNGs are included. Existing social-preview art was retained, not generated or presented as a photograph of the premises.

## Vercel deployment preparation

For the currently preferred GitHub → Netlify workflow, use [NETLIFY-DEPLOY.md](NETLIFY-DEPLOY.md). Netlify uses `netlify.toml`, Node 22 and its automatic Next.js adapter. When no explicit production URL is set, the site uses Netlify's primary `URL` environment variable. Custom domains should set `NEXT_PUBLIC_SITE_URL` and rebuild. The following Vercel instructions remain available as an alternative.

1. Import this project with the Next.js preset and Node 22 or another supported version.
2. Set the final `NEXT_PUBLIC_SITE_URL` and any verified optional values before building.
3. Run the documented checks and production build; inspect canonical URLs, sitemap, metadata and crawler behavior on the deployment.
4. Review the actual service menu, reference prices, asset rights, business policies and remaining missing facts with the owner.
5. Add the verified Business Profile/map URL, connect Search Console and submit `/sitemap.xml` after launch.

No account deployment, DNS modification or public publication was performed. Search rankings, rich results and Lighthouse targets are not guaranteed by implementation alone. FAQ markup does not imply eligibility for Google FAQ rich results.

## Scope

39 content routes: 11 primary pages, 16 treatment pages, 6 location guides and 6 journal articles; plus robots, sitemap, icons, a real not-found response and an aroma-route redirect. Full route/keyword assignments are in `SEO-KEYWORD-MAP.md`. Research and price discrepancies are in `COMPETITOR-SEO-RESEARCH.md`.

`scratch/` contains existing and one-time development utilities, not application code. Do not rerun the redesign generators; edit the maintained source files listed above.
