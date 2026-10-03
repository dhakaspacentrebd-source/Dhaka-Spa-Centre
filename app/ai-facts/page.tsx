import Link from "next/link";
import { BUSINESS_INFO as b } from "@/data/business";
import { SERVICES } from "@/data/services";
import { VERIFIED_PRICES } from "@/data/verified-prices";
import { QuickFacts } from "@/components/QuickFacts";
import { PageIntro } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({ title: "Dhaka Spa Centre Business Facts & Confirmed Prices", description: "Factual business details for Dhaka Spa Centre: Gulshan 2 address, phone, booking links, service areas and six owner-confirmed 60-minute guide prices.", path: "/ai-facts" });
export default function Page() {
  return <>
    <PageIntro eyebrow="Business information" title="Dhaka Spa Centre: business facts" description="A factual reference for visitors comparing our services or planning a Gulshan 2 appointment." path="/ai-facts" />
    <article className="wrap page-body">
      <QuickFacts />
      <div className="prose">
        <h2>Category and physical location</h2>
        <p>{b.name} is a Thai spa and massage centre with one listed physical address in Gulshan 2, Dhaka. Gulshan, Banani, Baridhara and Dhaka are visitor service areas. There are no separate Banani or Baridhara branches listed on this website.</p>
        <p><a href={b.googleBusinessProfileUrl}>Dhaka Spa Centre Google Business Profile ↗</a></p>
        <h2>Owner-confirmed 60-minute guide prices</h2>
        <p>The owner supplied these six prices. They are guide prices in Bangladeshi taka; confirm the current total, availability and any applicable charges directly before booking. Rates for 90 or 120 minutes have not been confirmed for these services.</p>
        <div className="table-scroll"><table className="price-table"><thead><tr><th scope="col">Service</th><th scope="col">Duration</th><th scope="col">Guide price (BDT)</th></tr></thead><tbody>{VERIFIED_PRICES.map(s=><tr key={s.slug}><th scope="row"><Link href={"/services/"+s.slug}>{s.name}</Link></th><td>60 minutes</td><td>{s.price}</td></tr>)}</tbody></table></div>
        <h2>Treatment guides</h2>
        <p>The website also describes the following treatments. Guide descriptions are not medical advice; ask the team to confirm session details and current availability.</p>
        <ul>{SERVICES.map(s=><li key={s.slug}><Link href={"/services/"+s.slug}>{s.name}</Link></li>)}</ul>
        <h2>What remains unconfirmed</h2>
        <p>Opening hours, parking, payment methods, cancellation terms, staff qualifications and detailed hygiene or consent policies have not been supplied for publication. The gallery uses illustrative imagery, rather than verified photographs of the centre or staff. No verified review counts or ratings are published here.</p>
        <p><Link href="/about">About the centre</Link> · <Link href="/faq">Visitor questions</Link> · <Link href="/safety">Safety and preparation</Link> · <Link href="/contact">Contact and directions</Link></p>
      </div>
    </article>
  </>;
}
