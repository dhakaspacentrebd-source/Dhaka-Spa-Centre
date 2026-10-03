import { BUSINESS_INFO as b } from "@/data/business";
import { SERVICES } from "@/data/services";
import { VERIFIED_PRICES } from "@/data/verified-prices";

export const dynamic = "force-static";
export function GET() {
  const text = `# ${b.name}

> Thai spa and massage centre in Gulshan 2, Dhaka, Bangladesh. This reference describes published business information; it is not a guarantee of search inclusion.

## Business facts
- Name: ${b.name}
- Category: Thai spa / massage spa
- Address: ${b.address.formatted}
- Phone: ${b.contact.phone}
- Website: ${b.websiteUrl}/
- Service areas: ${b.serviceAreas.join(", ")}. Banani and Baridhara are not branches.
- Opening hours: not supplied; contact the team.
- Booking: ${b.contact.whatsappLink}; ${b.telegramUrl}; ${b.contact.telLink}. Wait for appointment confirmation.
- Google Business Profile: ${b.googleBusinessProfileUrl}

## Owner-confirmed guide prices
${VERIFIED_PRICES.map(s=>`- ${s.name}: 60 minutes, BDT ${s.numericPrice}.`).join("\n")}
Confirm the current total and availability before booking. These six prices were supplied by the owner. Other figures on the menu are initial guides. No additional 90/120-minute rates are inferred.

## Services
${SERVICES.map(s=>`- [${s.name}](${b.websiteUrl}/services/${s.slug}): ${s.shortDescription}`).join("\n")}

## Important pages
${[["Business facts","ai-facts"],["Services","services"],["Prices","prices"],["About","about"],["Contact","contact"],["FAQ","faq"],["Safety and consent questions","safety"],["Gulshan 2 location","spa-in-gulshan-2"],["Journal","blog"],["Privacy","privacy-policy"],["Terms","terms"]].map(([label,path])=>`- [${label}](${b.websiteUrl}/${path})`).join("\n")}

## Accuracy limits
No verified opening hours, staff credentials, review counts, ratings, parking details, payment methods or detailed hygiene/cancellation policies have been supplied. Images are illustrative, not verified premises or staff photographs. Massage descriptions are for relaxation and comparison, not diagnosis or medical treatment claims.
`;
  return new Response(text, {headers: {"Content-Type":"text/plain; charset=utf-8"}});
}
