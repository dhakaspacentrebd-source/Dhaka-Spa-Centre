import { FAQS } from "@/data/faq";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageIntro, BookingCTA, JsonLd } from "@/components/Sections";
import { generateFAQSchema } from "@/lib/schema";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({
  title: "Spa Appointments, Prices & Visit FAQs",
  description:
    "Find answers about choosing a massage, booking on WhatsApp, guide prices and visiting Dhaka Spa Centre in Gulshan 2.",
  path: "/faq",
});
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Your questions"
        title="A little clarity before you arrive."
        description="Practical answers to help you choose a treatment and plan your time with us."
        path="/faq"
      />
      <section className="wrap narrow page-body">
        <FAQAccordion items={FAQS} />
      </section>
      <JsonLd data={generateFAQSchema(FAQS)} />
      <BookingCTA />
    </>
  );
}
