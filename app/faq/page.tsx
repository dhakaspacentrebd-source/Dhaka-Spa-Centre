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
const categoryLabels: Record<string, string> = {
  Treatments: "Services", Pricing: "Prices", Preparation: "First Visit",
};
const categoryOf = (item: { category: string }) => categoryLabels[item.category] || item.category;
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
        {Array.from(new Set(FAQS.map(categoryOf))).map(category => (
          <section className="section-gap" key={category}>
            <h2>{category}</h2>
            <FAQAccordion items={FAQS.filter(item => categoryOf(item) === category)} />
          </section>
        ))}
      </section>
      <JsonLd data={generateFAQSchema(FAQS)} />
      <BookingCTA />
    </>
  );
}
