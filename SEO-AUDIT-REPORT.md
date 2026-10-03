# Dhaka Spa Centre — SEO audit and implementation report

Audit date: 4 October 2026, Asia/Dhaka. Production baseline: https://dhakaspacentre.com. Updated implementation: local production build at http://localhost:3001, built with production canonical origin https://dhakaspacentre.com.

Follow-up: added the owner-supplied map below the homepage LocationBlock's “Find directions” link. This homepage iframe reserves 450px, allows fullscreen, loads lazily and uses strict-origin-when-cross-origin. Desktop map rendering and mobile width were verified; lint and production build passed. Homepage Lighthouse metrics below predate this additional map. Contact and Gulshan 2 maps remain unchanged. Additional changed file: components/Sections.tsx; homepage and CSS also updated.

**Deployment status: the changes in this report have not been pushed or deployed.** Production checks describe the current live site; the page table and implementation checks describe the updated local build. This report does not claim Google has indexed new or modified content.

## A. Fixed issues

| Issue / root cause | Files | Implemented fix | Validation |
| --- | --- | --- | --- |
| Homepage H1 was editorial rather than identifying the business/location | app/page.tsx, app/layout.tsx | One visible H1 names Dhaka Spa Centre and Gulshan 2, Dhaka; descriptive spa text remains directly underneath. Kept the strong title; refined description. | Rendered HTML and 390px/1440px visual checks; no H1 duplication. |
| Card sizes mismatched CSS breakpoints; all gallery images had the same oversized desktop hint despite different spans | components/ServiceCard.tsx, app/gallery/page.tsx, app/about/page.tsx, app/services/[slug]/page.tsx, next.config.mjs | Matched one/two/three-column widths and full-width gallery spans; corrected detail-image width hints. Candidate widths capped at the largest 1376px source. No image replaced. | Source dimensions checked with sharp; browser selected 640px for 405px desktop cards and 1376px for full desktop hero; no 3840px candidates in updated HTML. |
| Social dimensions were declared 1200×630 but the file was 1376×768; WebP encoding was oversized | lib/seo.ts, public/brand/og-image.webp | Corrected OG dimensions; re-encoded existing artwork without resizing, cropping or replacing its design. | Dimensions and visual quality checked; 788,391 → 112,676 bytes (85.7% smaller). Artwork is not loaded into critical page imagery. |
| LCP image had no explicit high fetch priority | app/page.tsx, app/services/[slug]/page.tsx | Eager, high-priority LCP images remain discoverable in initial HTML. Lower images remain lazy. | Lighthouse identifies hero and service-detail images as LCP; all LCP discovery checklist items pass. |
| Two separately identified business/Organization entities described the same business | lib/schema.ts, app/layout.tsx | Single HealthAndBeautyBusiness entity with stable #business ID, logo, verified Maps profile and consistent PostalAddress. WebSite, Service and BlogPosting reference it. | All 41 rendered pages have exactly one business entity; generated JSON parses; no separate #organization entity. |
| Service schema omitted verified rates; articles lacked publisher/image relationships | lib/schema.ts, data/verified-prices.ts | Added numeric BDT Offer only for the six owner-confirmed 60-minute guide prices, with confirmation wording. BlogPosting links author/publisher to #business and existing image. No fabricated date/availability. | Offer prices, currency and entity origin checks pass; unknown rates, ratings, hours and geo are omitted. |
| Directions event missed the actual share.google link and used phone_click | components/Analytics.tsx | call_click and share.google/maps.app.goo.gl directions detection; ignores synthetic clicks. | Code reviewed; production contains no GA4 tag. Tracker remains disabled without a configured consumer. Real GA4 delivery is unverified, not claimed as fixed. |
| Facts and AI text references absent (production 404) | app/ai-facts/page.tsx, app/llms.txt/route.ts, data/verified-prices.ts | Added factual reference page and plain-text endpoint generated from central business/service data. Distinguishes six owner-confirmed rates from other inherited guides. | Both return 200 locally; plain-text content type verified; facts page appears in sitemap and footer. |
| No reusable visible Quick Facts component | components/QuickFacts.tsx, app/services/[slug]/page.tsx, app/[location]/page.tsx, app/ai-facts/page.tsx | Server-rendered facts on all 16 service pages, six location pages and the facts page. Homepage retains its original location section; no separate Plan your visit block. Unknown hours prompt direct confirmation. | Facts present in raw HTML, one unchanged physical address, nearby areas explicitly are not branches. |
| Supplied verified map absent | data/business.ts, components/VerifiedMap.tsx, app/contact/page.tsx, app/[location]/page.tsx, app/globals.css, data/locations.ts | Exact owner-supplied embed on contact and Gulshan 2 only, below critical content; responsive 400px fixed-height lazy iframe with descriptive title. Corrected outdated map-search wording. | DOM checks verify exact source, loading=lazy, title and reserved height; mobile pages have no horizontal overflow. |
| Six general FAQs and limited service preparation content | data/faq.ts, app/faq/page.tsx, data/session-guides.ts, app/services/[slug]/page.tsx | 36 FAQs across 12 groups; distinct technique/pressure/product/preparation/aftercare/safety guidance for all 16 services. Existing FAQs preserved. | Every schema FAQ question/answer is in server HTML; native details keyboard expansion works; unknown policies stay confirmation questions. |
| Safety/consent questions and owner-data gaps scattered | app/safety/page.tsx, app/about/page.tsx, components/Footer.tsx, OWNER-DATA.md | Added sourced safety preparation page, clearer About facts, policy links and editorial placeholder checklist. No unverified hygiene or staff claims. | New pages linked internally; no raw placeholder tokens in JSON-LD. NAP unchanged. |
| Short existing articles lacked comparison/preparation depth | data/editorial-guides.ts, app/blog/[slug]/page.tsx | Expanded six existing URLs: Thai/Swedish/deep tissue comparison, first visit, frequency, desk-worker planning, before/after, hot stone and couple/gift questions. Reading time is computed from actual text. | All six return 200, retain unique metadata and contain expanded server-rendered text and relevant source/safety links. No thin extra article URLs added. |
| Typecheck included an obsolete export inside ignored release archive | tsconfig.json | Excluded generated release/scratch/previews directories from application checking. | Application lint, typecheck and production build pass. |
| New pages needed crawl paths | app/sitemap.ts, components/Footer.tsx, package.json, scripts/seo-audit.cjs | Added two HTML routes to sitemap/footer and a reusable route/metadata/schema/link audit. | 41 sitemap routes; no orphan, duplicate title/description/H1/canonical or broken internal link/image. |
| Wrapped mobile booking action approached the absolute hero footer at 320px | app/globals.css | Reserved extra hero height only at widths ≤360px. Existing colors, fonts and other breakpoints unchanged. | 320px geometry and visual check show separation between the actions and footer. |

### Already resolved — no change required

- Existing 39 indexable production pages returned HTTP 200, had unique titles/descriptions/H1/canonicals, Open Graph data and meaningful image alt attributes.
- HTTPS worked. HTTP and www redirected with 301 to the HTTPS non-www origin. /services/ redirected 308 to /services, and the old aroma-body-massage route redirected 308 directly to aromatherapy-massage. Unknown routes returned 404.
- Production robots.txt allowed public content for User-Agent: * and referenced the correct sitemap. No additional user-agent rules were needed; wildcard access covers the bots named in the request. Network access does not guarantee indexing or AI inclusion.
- Canonical origin, preview noindex protection and original permanent alias were already implemented. No URL migration or redirect rewrite was needed.
- Existing fonts use next/font, local font assets and swap; production loads two Latin font resources. No runtime Google Fonts stylesheet, duplicate GA tag or unnecessary third-party library was found.
- Footer, cards, FAQ answers, content and JSON-LD are server-rendered. The four client components support navigation, duration selection, enquiry form and optional events; none was removed blindly.
- Existing fill-image containers reserve height and use cover; no stretched raster image was observed. The logo retains intrinsic dimensions. Illustrative-image disclosure was preserved.
- Location pages already contain different visitor-planning content. Banani and Baridhara are service areas, not additional physical premises.

## B. Remaining issues and limits

1. **Production release pending.** New content/schema must be deployed and the live site retested before claiming production outcomes.
2. **LCP target not met on every local run.** See actual measurements below. The local Windows webpack build emitted an empty next-font manifest even on a clean-cache rebuild, while the live baseline emits two font preloads. Font files themselves are present and load with 200. This environment discrepancy and HTTP/transport differences limit direct before/after inference. No brittle hard-coded font hashes or framework internals were modified. Recheck the hosted production build and field data after release.
3. **Existing color contrast warnings remain.** Lighthouse accessibility is 96. Several small bronze/muted texts on ivory sections/footer fall below 4.5:1 (about 3.98–4.49 in baseline). User explicitly required unchanged colors and typography; the palette was preserved. No contrast pass is claimed.
4. **GA4 not configured.** No real Measurement ID or provider/consent configuration supplied. Optional dataLayer events are not a GA4 installation. See OWNER-DATA.md before enabling analytics.
5. **Owner information remains missing.** Hours, staff credentials, actual hygiene/consent/payment/cancellation/parking and gift policies await confirmation. Current images remain illustrative; no reviews/ratings were fabricated.
6. **Google Rich Results Test: NOT YET EXTERNALLY VALIDATED.** JSON syntax, visible FAQ correspondence, stable entity IDs, valid numeric offers and placeholder leakage were checked locally. Those checks do not equal Google eligibility or a rich-result pass.
7. **Field CWV/INP not measured.** Lighthouse navigation metrics cannot establish real-user INP or a field Core Web Vitals pass. Search Console/CrUX field data is required; TBT is not presented as INP.
8. **Shared brand OG image retained.** All routes expose the required OG fields and existing 1376×768 artwork with corrected dimensional metadata and smaller encoding. Unique page-specific social artwork was not invented or loaded into critical page imagery.
9. **Essential CSS remains render blocking.** It is a single roughly 6–7 KiB transferred stylesheet in measured runs. Deferring it would risk unstyled rendering and layout shifts. Next.js runtime/polyfills also remain; no compatibility code was removed based solely on an estimated savings warning.
10. **Search ranking/indexing is not guaranteed.** Sitemap discovery, crawlability, facts pages and schema are useful architecture, not proof of indexing, rich results or AI citations.

## C. Every indexable page — updated rendered HTML

Common graph on every page: HealthAndBeautyBusiness (#business) and WebSite (#website). Table includes the generated schema types. All canonicals use the production origin; status is from the local production build. All rows have one H1, an index/follow policy and all five required OG properties.

| Page | Title | Meta Description | H1 | Canonical | Schema | Status |
| --- | --- | --- | --- | --- | --- | --- |
| / | Dhaka Spa Centre \| Thai Spa & Massage in Gulshan 2 | Explore Thai spa and massage at Dhaka Spa Centre in Gulshan 2, Dhaka. Compare treatments and guide prices, then call or enquire on WhatsApp to book. | Dhaka Spa Centre. Gulshan 2, Dhaka. | https://dhakaspacentre.com | HealthAndBeautyBusiness, WebSite | 200 |
| /services | Massage & Spa Treatments in Gulshan \| Dhaka Spa Centre | Compare Thai, Swedish, deep tissue, aromatherapy and specialist massage options. Choose a duration and enquire with Dhaka Spa Centre in Gulshan 2. | A little time. A world of difference. | https://dhakaspacentre.com/services | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /prices | Spa & Massage Prices in Gulshan, Dhaka \| Dhaka Spa Centre | Compare initial massage guide prices by 60, 90 and 120 minute sessions. Confirm your preferred treatment and final price with Dhaka Spa Centre. | Choose your treatment. Take your time. | https://dhakaspacentre.com/prices | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /about | Our Story & Approach to Wellness \| Dhaka Spa Centre | Discover Dhaka Spa Centre, a Thai spa and massage centre in Gulshan 2. Thoughtful treatment choices and a simple, personal way to arrange your visit. | Wellness, with room to breathe. | https://dhakaspacentre.com/about | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /contact | Contact & Book Your Gulshan 2 Visit \| Dhaka Spa Centre | Contact Dhaka Spa Centre at House # 1/A, Road 90, Gulshan 2, Dhaka 1212. Call +8801609875990 or enquire through WhatsApp and Telegram. | Let your next pause begin. | https://dhakaspacentre.com/contact | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /gallery | Wellness Gallery & Treatment Inspiration \| Dhaka Spa Centre | Explore an illustrative wellness gallery of calm interiors, massage rituals and warming treatments for your Dhaka Spa Centre visit. | Small details. A slower rhythm. | https://dhakaspacentre.com/gallery | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /faq | Spa Appointments, Prices & Visit FAQs \| Dhaka Spa Centre | Find answers about choosing a massage, booking on WhatsApp, guide prices and visiting Dhaka Spa Centre in Gulshan 2. | A little clarity before you arrive. | https://dhakaspacentre.com/faq | BreadcrumbList, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /offers | Spa Offers & Booking Enquiries \| Dhaka Spa Centre | Ask Dhaka Spa Centre about current treatment offers and appointment options. Compare the regular guide price menu before you reserve. | Something to look forward to. | https://dhakaspacentre.com/offers | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /blog | The Wellness Journal \| Massage & Visit Guides \| Dhaka Spa Centre | Practical guides to Thai massage, choosing a session and preparing for a spa visit in Dhaka and Gulshan 2. | A more thoughtful way to unwind. | https://dhakaspacentre.com/blog | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /privacy-policy | Privacy policy \| Dhaka Spa Centre | How information is handled when you use this website. | Privacy policy | https://dhakaspacentre.com/privacy-policy | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /terms | Booking terms \| Dhaka Spa Centre | Please read these practical terms before arranging your appointment. | Booking terms | https://dhakaspacentre.com/terms | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /ai-facts | Dhaka Spa Centre Business Facts & Confirmed Prices | Factual business details for Dhaka Spa Centre: Gulshan 2 address, phone, booking links, service areas and six owner-confirmed 60-minute guide prices. | Dhaka Spa Centre: business facts | https://dhakaspacentre.com/ai-facts | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /safety | Massage Preparation, Safety & Consent Questions \| Dhaka Spa Centre | Plan a comfortable spa visit: discuss pressure, product sensitivities, consent and hygiene questions before booking Dhaka Spa Centre in Gulshan 2. | Preparation, safety and consent | https://dhakaspacentre.com/safety | BreadcrumbList, HealthAndBeautyBusiness, WebSite | 200 |
| /services/thai-massage | Thai Massage in Dhaka \| Dhaka Spa Centre | Thai-inspired massage combines steady pressure with assisted stretches. Choose this treatment if you prefer active bodywork to an oil-led massage. Enquire in Gulshan 2. | Thai Massage in Gulshan 2 | https://dhakaspacentre.com/services/thai-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/aromatherapy-massage | Aromatherapy Massage in Dhaka \| Dhaka Spa Centre | An oil-based massage with an emphasis on flowing movements and fragrance. A considered choice when you want a slower, sensory-led session. Enquire in Gulshan 2. | Aromatherapy Massage in Gulshan 2 | https://dhakaspacentre.com/services/aromatherapy-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/deep-tissue-massage | Deep Tissue Massage in Dhaka \| Dhaka Spa Centre | A pressure-focused massage that spends more time on selected areas. Discuss the places you would like attention and the pressure you find comfortable. Enquire in Gulshan 2. | Deep Tissue Massage in Gulshan 2 | https://dhakaspacentre.com/services/deep-tissue-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/hot-stone-massage | Hot Stone Massage in Dhaka \| Dhaka Spa Centre | A massage combining warmed stones with hands-on techniques. The warmth adds a different sensory quality to an unhurried appointment. Enquire in Gulshan 2. | Hot Stone Massage in Gulshan 2 | https://dhakaspacentre.com/services/hot-stone-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/full-body-massage | Full Body Massage in Dhaka \| Dhaka Spa Centre | A balanced massage covering several areas rather than concentrating on a single spot. Talk through the areas you want included and any you prefer to avoid. Enquire in Gulshan 2. | Full Body Massage in Gulshan 2 | https://dhakaspacentre.com/services/full-body-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/swedish-massage | Swedish Massage in Dhaka \| Dhaka Spa Centre | Swedish-style massage uses gliding movements and gentle kneading. It is an approachable option for guests who enjoy a flowing oil-based treatment. Enquire in Gulshan 2. | Swedish Massage in Gulshan 2 | https://dhakaspacentre.com/services/swedish-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/foot-massage | Foot Massage in Dhaka \| Dhaka Spa Centre | Focused massage for the feet and lower legs, suited to guests who prefer a smaller treatment area after a day spent on their feet. Enquire in Gulshan 2. | Foot Massage in Gulshan 2 | https://dhakaspacentre.com/services/foot-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/body-scrub | Body Scrub in Dhaka \| Dhaka Spa Centre | An exfoliation treatment rather than a massage. Ask about the scrub ingredients, the treatment steps and availability before arranging your visit. Enquire in Gulshan 2. | Body Scrub in Gulshan 2 | https://dhakaspacentre.com/services/body-scrub | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/dry-massage | Dry Massage in Dhaka \| Dhaka Spa Centre | Pressure-based bodywork for guests who prefer to avoid oils. Discuss clothing, pressure and the areas to focus on when arranging your appointment. Enquire in Gulshan 2. | Dry Massage in Gulshan 2 | https://dhakaspacentre.com/services/dry-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/oil-massage | Oil Massage in Dhaka \| Dhaka Spa Centre | Oil creates glide for longer massage strokes. This option suits guests who prefer fluid movement over assisted stretching. Enquire in Gulshan 2. | Oil Massage in Gulshan 2 | https://dhakaspacentre.com/services/oil-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/hot-oil-massage | Hot Oil Massage in Dhaka \| Dhaka Spa Centre | A warm-oil massage enquiry for guests who enjoy gentle warmth alongside flowing bodywork. Ask the team about current availability and products. Enquire in Gulshan 2. | Hot Oil Massage in Gulshan 2 | https://dhakaspacentre.com/services/hot-oil-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/body-to-body-massage | Body To Body Massage in Dhaka \| Dhaka Spa Centre | A specialist treatment option from the existing menu. Contact the team to understand the technique, boundaries and current availability before making a reservation. Enquire in Gulshan 2. | Body To Body Massage in Gulshan 2 | https://dhakaspacentre.com/services/body-to-body-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/nuru-massage | Nuru Massage in Dhaka \| Dhaka Spa Centre | A gel-based treatment option. Ask the team to explain the session format, product ingredients and availability so you can make an informed choice. Enquire in Gulshan 2. | Nuru Massage in Gulshan 2 | https://dhakaspacentre.com/services/nuru-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/couple-massage | Couple Massage in Dhaka \| Dhaka Spa Centre | An appointment enquiry for two guests. Contact the team to confirm whether simultaneous sessions and your preferred treatments can be arranged. Enquire in Gulshan 2. | Couple Massage in Gulshan 2 | https://dhakaspacentre.com/services/couple-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/four-hand-massage | Four Hand Massage in Dhaka \| Dhaka Spa Centre | A massage format involving two practitioners. Availability depends on staffing, so confirm the session format and timing directly before travelling. Enquire in Gulshan 2. | Four Hand Massage in Gulshan 2 | https://dhakaspacentre.com/services/four-hand-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /services/six-hand-massage | Six Hand Massage in Dhaka \| Dhaka Spa Centre | A specialist format involving three practitioners. Enquire in advance about availability, the treatment plan and the total session price. Enquire in Gulshan 2. | Six Hand Massage in Gulshan 2 | https://dhakaspacentre.com/services/six-hand-massage | BreadcrumbList, Service, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /spa-in-dhaka | Spa in Dhaka \| Visit Gulshan 2 \| Dhaka Spa Centre | Choosing a spa in Dhaka starts with more than a treatment name. Compare the technique, session length and practical journey before reserving time at our Gulshan 2 centre. | A spa visit in Dhaka, thoughtfully planned. | https://dhakaspacentre.com/spa-in-dhaka | BreadcrumbList, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /spa-in-gulshan | Spa in Gulshan \| Visit Gulshan 2 \| Dhaka Spa Centre | Whether your day starts in Gulshan 1 or Gulshan 2, a little planning helps a massage appointment fit comfortably around the rest of it. Our centre is on Road 90 in Gulshan 2. | Make room for a spa day in Gulshan. | https://dhakaspacentre.com/spa-in-gulshan | BreadcrumbList, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /spa-in-gulshan-2 | Spa in Gulshan 2 \| Visit Gulshan 2 \| Dhaka Spa Centre | Find Dhaka Spa Centre at House # 1/A, Road 90, Gulshan 2, Dhaka 1212. This is the practical guide to finding us, confirming a session and arriving ready for your appointment. | Your spa address in Gulshan 2. | https://dhakaspacentre.com/spa-in-gulshan-2 | BreadcrumbList, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /spa-in-banani | Spa near Banani \| Visit Gulshan 2 \| Dhaka Spa Centre | If you are comparing spa options from Banani, Dhaka Spa Centre offers a Gulshan 2 destination to consider. There is no confirmed Banani branch; your appointment takes place at our Road 90 address. | Coming from Banani? Your pause is in Gulshan 2. | https://dhakaspacentre.com/spa-in-banani | BreadcrumbList, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /spa-in-baridhara | Spa near Baridhara \| Visit Gulshan 2 \| Dhaka Spa Centre | Plan a visit from Baridhara to Dhaka Spa Centre in Gulshan 2. Compare treatments, arrange the details in advance and use the full Road 90 address for your journey. | From Baridhara to a slower moment. | https://dhakaspacentre.com/spa-in-baridhara | BreadcrumbList, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /spa-near-me | Find a Spa Near You \| Gulshan 2 Directions \| Dhaka Spa Centre | Searching for a spa or massage near you? Dhaka Spa Centre is in Gulshan 2. Your distance from us depends on where you are starting; this website does not access or estimate your location. | A spa near you starts with the right address. | https://dhakaspacentre.com/spa-near-me | BreadcrumbList, FAQPage, HealthAndBeautyBusiness, WebSite | 200 |
| /blog/spa-and-massage-guide-dhaka | How to choose a massage in Dhaka \| Dhaka Spa Centre | A practical way to compare technique, time, price and the journey before booking. | How to choose a massage in Dhaka | https://dhakaspacentre.com/blog/spa-and-massage-guide-dhaka | BreadcrumbList, BlogPosting, HealthAndBeautyBusiness, WebSite | 200 |
| /blog/choosing-a-spa-in-gulshan | Planning a spa visit in Gulshan 2 \| Dhaka Spa Centre | What to confirm before travelling to a spa appointment on Road 90. | Planning a spa visit in Gulshan 2 | https://dhakaspacentre.com/blog/choosing-a-spa-in-gulshan | BreadcrumbList, BlogPosting, HealthAndBeautyBusiness, WebSite | 200 |
| /blog/thai-massage-guide-benefits-expectations | Thai massage: what to expect \| Dhaka Spa Centre | Understand the difference between assisted movement and an oil-based massage. | Thai massage: what to expect | https://dhakaspacentre.com/blog/thai-massage-guide-benefits-expectations | BreadcrumbList, BlogPosting, HealthAndBeautyBusiness, WebSite | 200 |
| /blog/full-body-massage-guide | 60 or 90 minutes: choosing your session \| Dhaka Spa Centre | How the amount of time can shape a full-body massage appointment. | 60 or 90 minutes: choosing your session | https://dhakaspacentre.com/blog/full-body-massage-guide | BreadcrumbList, BlogPosting, HealthAndBeautyBusiness, WebSite | 200 |
| /blog/spa-etiquette-dhaka | Your first massage: a practical checklist \| Dhaka Spa Centre | Simple questions to make before, during and after your first appointment. | Your first massage: a practical checklist | https://dhakaspacentre.com/blog/spa-etiquette-dhaka | BreadcrumbList, BlogPosting, HealthAndBeautyBusiness, WebSite | 200 |
| /blog/massage-types-explained | Thai, Swedish or deep tissue? A simple comparison \| Dhaka Spa Centre | Compare movement, flowing touch and focused pressure to choose your preferred experience. | Thai, Swedish or deep tissue? A simple comparison | https://dhakaspacentre.com/blog/massage-types-explained | BreadcrumbList, BlogPosting, HealthAndBeautyBusiness, WebSite | 200 |

## D. Actual Lighthouse / Core Web Vitals evidence

Lighthouse 13.5.0 CLI, Chrome 154, mobile emulation 412×823 at 1.75 DPR, simulated mobile network (150ms RTT / 1638.4 Kbps) and 4× CPU slowdown. Baselines below and updated runs were executed sequentially; earlier concurrent exploratory baselines are not used in this comparison. Single runs are lab observations, not stable medians. Baseline uses public HTTPS/Netlify; updated runs use localhost HTTP on Windows. These are **not controlled deployment comparisons** and do not prove a performance improvement or regression in the hosted release.

| Page / environment | Performance | SEO | Accessibility | Best practices | FCP (s) | LCP (s) | CLS | TBT (ms) | INP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| home / live baseline | 99 | 100 | 96 | 100 | 1.38 | 1.91 | 0.00010 | 64 | Not measured |
| home / updated local build | 94 | 100 | 96 | 100 | 1.38 | 2.92 | 0.00010 | 65 | Not measured |
| service / live baseline | 98 | 100 | 96 | 100 | 1.51 | 1.99 | 0.00000 | 61 | Not measured |
| service / updated local build | 95 | 100 | 96 | 100 | 1.37 | 2.83 | 0.00000 | 70 | Not measured |
| location / live baseline | 95 | 100 | 96 | 100 | 1.43 | 2.62 | 0.00000 | 83 | Not measured |
| location / updated local build | 96 | 100 | 96 | 100 | 1.37 | 2.64 | 0.00000 | 48 | Not measured |
| blog / live baseline | 98 | 100 | 96 | 100 | 1.10 | 2.21 | 0.00000 | 28 | Not measured |
| blog / updated local build | 97 | 100 | 96 | 100 | 1.37 | 2.46 | 0.00000 | 49 | Not measured |
| contact / live baseline | 97 | 100 | 96 | 100 | 0.89 | 2.18 | 0.00000 | 151 | Not measured |
| contact / updated local build | 96 | 100 | 96 | 100 | 1.37 | 2.61 | 0.00000 | 49 | Not measured |

All five updated pages meet Lighthouse SEO ≥95 (actual 100). All local CLS values are below 0.1. Local LCP at or above 2.5 seconds: home, service, location, contact. Below 2.5 seconds: blog. INP <200ms is unverified. Do not convert these lab results into a claimed field CWV pass. Final lab audits were at 412px; the subsequent ≤360px hero-spacing rule does not apply at that audited viewport. Build and rendered-route checks were rerun after that rule.

### Network and rendering review

| Page | Live requests / transferred KiB | Local requests / transferred KiB |
| --- | --- | --- |
| home | 22 / 454.1 | 22 / 375.9 |
| service | 23 / 384.5 | 22 / 300.7 |
| location | 20 / 376.8 | 19 / 311.3 |
| blog | 22 / 248.1 | 22 / 266.1 |
| contact | 19 / 246.2 | 36 / 723.4 |

Counts are observed initial-navigation requests, not a request-count optimization target. The lazy Maps iframe is below critical content; these initial-load counts do not capture every request it makes when scrolled into view. JS is delivered asynchronously. No new third-party JavaScript provider was added. Existing fonts, image object-fit behaviour, menu, form labels, focus styles and reduced-motion rules were retained.

### Before → after evidence, without invented category scores

| Category | Before → after | Limits |
| --- | --- | --- |
| Technical SEO | 39 valid sitemap routes → 41; zero duplicate metadata/broken links in both scans | No objective 0–10 score assigned |
| On-page SEO | Editorial H1 and six FAQs → entity/location H1, 36 grouped FAQs and richer services | Lighthouse SEO already 100; it is not a content-quality grade |
| Local SEO | Address/profile link already consistent → verified embeds, centralized profile and single business entity | Hours, parking and actual policies still unconfirmed |
| AI SEO / GEO | /ai-facts and /llms.txt 404 → both 200 locally | No measured AI visibility score or citation outcome |
| Structured data | Separate business and Organization IDs → one stable business entity with connected Service/BlogPosting and six verified Offers | NOT YET EXTERNALLY VALIDATED |
| Content trust | Clear illustrative-image disclosure but limited preparation → sourced safety guide, distinct session guidance and owner gap checklist | Staff/policies/photos require owner evidence |
| Performance | Actual baseline/local scores shown above | Different environments; no claimed numeric improvement |

## E. Owner must provide

See [OWNER-DATA.md](<C:/Users/HP/Desktop/Dhaka Spa Centre/OWNER-DATA.md>) for the full placeholder architecture and where each value belongs. It includes {{OPENING_HOURS}}, {{GBP_REVIEW_URL}}, {{REAL_PHOTOS}}, {{TESTIMONIALS}}, {{TEAM_INFORMATION}}, {{REVIEWER}}, {{EXPERIENCE}}, {{HYGIENE_POLICY}}, {{SAFETY_POLICY}}, {{CONSENT_POLICY}}, {{PARKING}}, {{PAYMENT_METHODS}}, {{DEPOSIT_POLICY}}, {{CANCELLATION_POLICY}}, {{PRICE_90}}, {{PRICE_120}}, {{GA4_MEASUREMENT_ID}} and {{GIFT_POLICY}}. {{GBP_URL}} is resolved by the supplied profile; no unknown token is emitted as a typed schema value.

## F. Changed files and purpose

| File | Purpose |
| --- | --- |
| app/page.tsx | Clear H1 and LCP priority; no separate Plan your visit section |
| app/layout.tsx | Homepage description and single business graph |
| app/[location]/page.tsx | Quick Facts, Maps link wording, Gulshan 2 embed |
| app/about/page.tsx | Central NAP and honest safety/team information |
| app/contact/page.tsx | Verified below-fold map |
| app/faq/page.tsx | 12 grouped FAQ sections |
| app/gallery/page.tsx | Correct full/half-width image sizes |
| app/services/[slug]/page.tsx | Specific session information, Quick Facts and image hints |
| app/blog/[slug]/page.tsx | Expanded articles, source note and calculated reading time |
| app/ai-facts/page.tsx | Factual business/service/price reference |
| app/llms.txt/route.ts | Central-data plain-text reference endpoint |
| app/safety/page.tsx | General safety, preparation, hygiene and consent questions |
| app/sitemap.ts | Two new HTML routes |
| app/globals.css | Small additions for facts/map using existing colors and fonts |
| components/QuickFacts.tsx | Reusable server facts section |
| components/VerifiedMap.tsx | Responsive titled lazy iframe |
| components/Footer.tsx | Crawlable facts and safety links |
| components/ServiceCard.tsx | Card image size hints matching actual columns |
| components/Analytics.tsx | Required event names, map-link detection and trusted clicks |
| data/business.ts | Central verified Maps profile/embed and service areas |
| data/verified-prices.ts | Provenance subset pointing to the existing menu |
| data/faq.ts | Thirty additional accurate visitor questions |
| data/session-guides.ts | Sixteen distinct technique/preparation/safety guides |
| data/editorial-guides.ts | Substantive additions to six existing journal articles |
| data/locations.ts | Corrected map-search wording |
| lib/schema.ts | Business consolidation, connected articles/services and verified offers |
| lib/seo.ts | Accurate OG image dimensions |
| public/brand/og-image.webp | Smaller encoding of unchanged social artwork |
| next.config.mjs | Avoid image candidates larger than visible sources |
| tsconfig.json | Exclude ignored archival/generated copies from application checking |
| package.json | Reusable audit command; no dependency changes |
| scripts/seo-audit.cjs | HTTP/metadata/canonical/schema/FAQ/image/internal-link/orphan checks |
| OWNER-DATA.md | Owner placeholders, analytics state and editorial follow-up |
| SEO-AUDIT-REPORT.md | This report and every-route evidence |

## Validation, visual evidence and reproduction

- npm run lint: passed, zero warnings.
- npm run typecheck: passed.
- npm run build: passed, 49 generated outputs including 41 HTML content routes plus framework/metadata/text outputs. Initial sandbox font download failed; network-enabled build and clean-cache rebuild succeeded. No application compile/type/lint errors remain. The local framework logs an internal NoFallbackError when the audit probes an unknown dynamic location, while returning the correct custom 404; the public baseline also returns 404.
- Route audit: 41 pages, 45 distinct local links and 11 image URLs fetched; failures 0, schema failures 0, broken links/images 0, duplicate metadata groups zero.
- JSON-LD tests prohibit placeholder leakage, unsupported hours/geo/ratings, duplicate business entities and malformed numeric BDT offers. Visible FAQ correspondence passed on all pages that emit FAQPage.
- Mobile checks at 390×844: ten representative routes (home, service, location, blog, contact, prices, FAQ, gallery, facts, safety) showed no document overflow or broken loaded images. Maps reserve 400px and have the required accessible title. Native FAQ keyboard activation and mobile-menu open/close/navigation passed. Dry Massage 90-minute selection showed Enquire and used the correct WhatsApp duration message.
- Desktop checked at 1440×1000: original luxury palette, fonts, navigation, hero imagery and overall layout remain. No font family, brand color, animation or booking flow was replaced. New factual sections extend page content.
- Browser console capture showed no warnings/errors during the exercised local interactions. No enquiry was sent to the business.
- The automatic next-env.d.ts file was regenerated by Next.js during build; it was not manually edited. The starting generated-file difference is absent after the successful build.

Evidence files remain in the ignored local scratch folder: seo-before.json, seo-after.json, seo-mobile-checks.json, seo-og-validation.json and lighthouse-before/final-*.json. Earlier exploratory lighthouse-after-*.json files are retained but the final table uses lighthouse-final-*.json. To repeat the published checks after deployment: npm run audit:seo. AUDIT_ORIGIN, CANONICAL_ORIGIN and AUDIT_OUTPUT allow testing a local production server without mistaking localhost for the canonical origin. Output is written to scratch/seo-current.json by default. No GitHub push or Netlify release was performed in this task.

### Visual comparison

![Original mobile homepage](<C:/Users/HP/Desktop/Dhaka Spa Centre/scratch/seo-before-home-mobile.png>)

![Updated mobile homepage](<C:/Users/HP/Desktop/Dhaka Spa Centre/scratch/seo-after-home-mobile.png>)

![Updated desktop homepage](<C:/Users/HP/Desktop/Dhaka Spa Centre/scratch/seo-after-home-desktop.png>)

## SEO Site Checkup retest

The previous report was not supplied, so its SEO score, AI Visibility value and failed-test counts are unverified. No improved third-party score is claimed.

**SEO Site Checkup re-test must be performed after production deployment.** After release, save the dated report for the canonical HTTPS domain, compare only verified prior values, investigate remaining sizing/render-blocking/analytics findings and record actual measurements. Preserve essential CSS and truthful business information even if a third-party score prefers another change. Run the live route audit and Google Rich Results Test, then check Search Console sitemap discovery/indexability and real-user CWV. A sitemap success is not an indexing guarantee.

## Primary references checked

- [Google Search documentation updates](https://developers.google.com/search/updates): FAQ rich results were discontinued in May 2026. FAQPage here remains a truthful semantic description of visible questions; no Google FAQ rich-result promise is made.
- [Google guide to AI optimization](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): Google does not require special AI files and does not use llms.txt for Search inclusion. The requested endpoint is a convenience reference, not a ranking mechanism.
- [Next.js Image documentation](https://nextjs.org/docs/pages/api-reference/components/image): responsive sizes, eager/priority behaviour and reserved image layout.
- [NCCIH massage safety overview](https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know): careful general safety wording, no cure or diagnosis claims.
