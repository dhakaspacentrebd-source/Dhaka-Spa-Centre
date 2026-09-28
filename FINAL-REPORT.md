# Dhaka Spa Centre — delivery report

Implemented in the existing project. No account deployment or DNS change has been performed.

## Build and design

Original ivory/charcoal-brown visual system, editorial homepage, responsive navigation, minimal DS logo, favicon/Apple icons, treatment collection, gallery, FAQ and WhatsApp-led appointment flow. Updated the old business identity to House # 1/A, Road 90, Gulshan 2, Dhaka 1212 and +8801609875990. Telegram uses the supplied profile.

Retained the existing App Router architecture; upgraded Next.js to 16.3.6 and React to 19.3.0 after audit findings. TypeScript, Tailwind and npm remain in use.

## Pages

Primary: `/`, `/services`, `/prices`, `/about`, `/contact`, `/gallery`, `/faq`, `/offers`, `/blog`, `/privacy-policy`, `/terms`.

Local: `/spa-in-dhaka`, `/spa-in-gulshan`, `/spa-in-gulshan-2`, `/spa-in-banani`, `/spa-in-baridhara`, `/spa-near-me`. Banani and Baridhara describe journeys to Gulshan 2, not invented branches. Nearby search does not request geolocation.

Treatments under `/services/`: `thai-massage`, `aromatherapy-massage`, `deep-tissue-massage`, `hot-stone-massage`, `full-body-massage`, `swedish-massage`, `foot-massage`, `body-scrub`, `dry-massage`, `oil-massage`, `hot-oil-massage`, `body-to-body-massage`, `nuru-massage`, `couple-massage`, `four-hand-massage`, `six-hand-massage`.

Journal under `/blog/`: `spa-and-massage-guide-dhaka`, `choosing-a-spa-in-gulshan`, `thai-massage-guide-benefits-expectations`, `full-body-massage-guide`, `spa-etiquette-dhaka`, `massage-types-explained`.

Includes `/sitemap.xml`, `/robots.txt`, branded icons, not-found handling and a permanent legacy aroma URL redirect.

## Pricing

Centralized in `data/services.ts`. Nine reference treatment price sets are implemented. Other treatments use Enquire, with no fabricated discounts or unverified rates. See [all working prices](PRICES.md) and [source/discrepancy research](COMPETITOR-SEO-RESEARCH.md).

## SEO, local SEO and schema

All 39 content pages have unique titles/descriptions, one H1 and canonical URLs. The [keyword map](SEO-KEYWORD-MAP.md) assigns primary/secondary themes and intent to every route. Main intent split: brand homepage, comparison services page, price menu, city planning, neighbourhood orientation, exact Gulshan 2 arrival, nearby-area journeys and informational articles.

Structured data: HealthAndBeautyBusiness (a LocalBusiness subtype), Organization, WebSite, Service, BreadcrumbList, FAQPage and Article. No fake reviews, ratings, coordinates or opening hours. FAQ markup is not a promise of Google rich results. NAP and booking actions use the supplied business information.

## Performance and validation

Images reduced about 83% in aggregate; Next Image responsive sizes/lazy loading, priority hero, Next Font and static generation used. Build, lint and typecheck passed. All 39 content routes and 43 linked paths passed HTTP checks. Responsive checks and booking-selector/menu/FAQ interactions passed. Detailed results and limits: [validation](VALIDATION.md).

## Before launch

- Set the final HTTPS production domain. The local fallback is not a production canonical origin.
- Confirm final treatment availability and owner-approved prices.
- Supply verified opening hours, official Google Maps URL/Place ID and coordinates if these should be published.
- Confirm rights for the illustrative images or replace them with owned photography.
- Review the business privacy/booking terms and confirm any payment/cancellation arrangements.
- Optionally supply analytics and Search Console details; analytics collection is currently disabled.
- Use the Vercel setup steps in [README](README.md). Deployment requires an authorized account/project. No passwords should be put in source files.

![Desktop design](previews/desktop.png)
