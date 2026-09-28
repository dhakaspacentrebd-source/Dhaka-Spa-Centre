import Link from "next/link";
import { SERVICES } from "@/data/services";
import { PageIntro, BookingCTA } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({
  title: "Spa & Massage Prices in Gulshan, Dhaka",
  description:
    "Compare initial massage guide prices by 60, 90 and 120 minute sessions. Confirm your preferred treatment and final price with Dhaka Spa Centre.",
  path: "/prices",
});
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="The price menu"
        title="Choose your treatment. Take your time."
        description="A clear starting point for planning your visit. All amounts are in Bangladeshi taka (৳). Contact the team to confirm current pricing and availability."
        path="/prices"
      />
      <section className="wrap page-body">
        <div className="table-scroll">
          <table className="price-table">
            <caption className="sr-only">
              Initial treatment guide prices by session duration in BDT
            </caption>
            <thead>
              <tr>
                <th scope="col">Treatment</th>
                <th scope="col">60 minutes</th>
                <th scope="col">90 minutes</th>
                <th scope="col">120 minutes</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((s) => (
                <tr key={s.slug}>
                  <td>
                    <Link href={"/services/" + s.slug}>{s.name} ↗</Link>
                  </td>
                  {Object.entries(s.durationPricing).map(([d, p]) => (
                    <td key={d}>{p}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="price-note">
          These are initial guide prices, pending confirmation by Dhaka Spa
          Centre. “Enquire” means a price or duration has not been confirmed.
          Ask about the total cost and any applicable charges before reserving;
          no discount is assumed.
        </p>
      </section>
      <BookingCTA />
    </>
  );
}
