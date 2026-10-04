# Owner information still needed

Only verified values should be added to `data/business.ts`, `data/services.ts` and the visible policy pages. Until then, unknown facts are omitted from structured data and explained as confirmation questions in visible content. These tokens are an editorial checklist, never runtime JSON-LD values.

| Placeholder | What to supply | Publication destination |
| --- | --- | --- |
| `{{HOLIDAY_HOURS}}` | Exceptions to the published weekly Google Business Profile hours | Central business data and contact |
| `{{GBP_REVIEW_URL}}` | Owner-confirmed direct review link | Only add a review CTA if appropriate |
| `{{REAL_PHOTOS}}` | Original premises/staff photographs with rights and accurate descriptions | Gallery, about and page images |
| `{{TESTIMONIALS}}` | Genuine quotes, permission and attribution | Visible testimonials only after verification; no assumed rating schema |
| `{{TEAM_INFORMATION}}` / `{{REVIEWER}}` | Named team biographies, actual roles and content reviewer with permission | About and relevant editorial pages |
| `{{EXPERIENCE}}` | Verifiable business history and experience | About; no invented years |
| `{{HYGIENE_POLICY}}` | Approved cleaning/linen/equipment/product procedures | Safety and FAQ |
| `{{SAFETY_POLICY}}` | Approved suitability, incident and staff-training arrangements | Safety and FAQ |
| `{{CONSENT_POLICY}}` | Actual boundaries, draping, changing, stop/pause process | Safety and FAQ |
| `{{PARKING}}` | Actual parking, drop-off and access instructions | Contact and directions |
| `{{PAYMENT_METHODS}}` / `{{DEPOSIT_POLICY}}` | Accepted methods, deposit terms and charges | Prices, FAQ and terms |
| `{{CANCELLATION_POLICY}}` | Reschedule deadlines, late arrival, fees and refunds | FAQ and terms |
| `{{PRICE_90}}` / `{{PRICE_120}}` | Owner-approved duration-specific prices | Central menu only; do not calculate from 60-minute rates |
| `{{GIFT_POLICY}}` | Whether gift bookings/vouchers exist, scope and rules | Couple guide and FAQ |

`{{GBP_URL}}` is resolved: https://share.google/LzwDmmK6zuq0frEmI. The supplied Maps embed is stored centrally. The embed's coordinate-looking parameters are not asserted as verified schema `geo`.

Six owner-confirmed 60-minute guide prices are identified in `data/verified-prices.ts`; figures come from the existing central menu, not a second rate table. Other inherited initial guide prices are preserved and require owner review. Weekly hours now match the published Google Business Profile: Saturday–Thursday 10:00–22:00 and Friday 14:00–22:00, Asia/Dhaka. Holiday arrangements still need confirmation. Staff credentials, ratings and review counts are not asserted.

## Analytics state

The owner authorized creation of the Dhaka Spa Centre GA4 account/property and acceptance of Google's displayed terms. Web stream Measurement ID: `G-E8J690CC4X`; stream ID: `16028762060`. Netlify production settings use `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_ENABLE_ANALYTICS=true`. Preview deployments never load it. Events include manual SPA `page_view`, `service_view`, `price_view`, `whatsapp_click`, `booking_click`, `call_click`, `directions_click` and `telegram_click`; synthetic clicks are ignored. Form text and message URLs are not sent by this tracker. Query strings and fragments are excluded from the page URL and referrer supplied to GA4.

Enhanced Measurement was turned off in the web stream; the site supplies manual views and events. Google signals, ad storage and advertising personalization are disabled. Analytics storage defaults to denied in the EEA, UK and Switzerland; no consent grant for those regions is inferred. The privacy page discloses GA4 and links to Google's processing explanation and browser opt-out. Optional account data sharing was unchecked during setup. Avoid installing a second tag through Netlify or a tag manager. Measurement-ID configuration alone does not confirm data delivery: verify Realtime after deployment with an actual browser visit and booking click.

## Editorial follow-up

The six existing journal URLs were retained and expanded with comparison, preparation, aftercare, frequency, desk-worker planning, hot stone and couple/gift discussion. No invented publication timestamps were added. Owner review of the published service menu and specific policies remains necessary. A future Bangla content plan should use human-reviewed translations with separate URLs and reciprocal language annotations only when the translated pages actually exist.
