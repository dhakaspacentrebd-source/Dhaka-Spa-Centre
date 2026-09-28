import Link from "next/link";
import { PageIntro, BookingCTA } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({
  title: "Spa Offers & Booking Enquiries",
  description:
    "Ask Dhaka Spa Centre about current treatment offers and appointment options. Compare the regular guide price menu before you reserve.",
  path: "/offers",
});
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Offers"
        title="Something to look forward to."
        description="No promotional offers are currently published. Contact the team to ask about any available packages for your preferred date."
        path="/offers"
      />
      <section className="wrap page-body prose">
        <h2>A thoughtful way to plan</h2>
        <p>
          Start with the <Link href="/prices">treatment price menu</Link> and
          choose the technique and duration that appeal to you. If you are
          arranging an appointment for two, ask whether your preferred sessions
          can take place together.
        </p>
        <p>
          Before accepting any offer, confirm the included treatment, session
          length, total price and booking conditions directly with the team.
        </p>
      </section>
      <BookingCTA />
    </>
  );
}
