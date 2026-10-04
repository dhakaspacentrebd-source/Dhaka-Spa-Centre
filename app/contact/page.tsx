import { BUSINESS_INFO as b } from "@/data/business";
import { PageIntro, LocationBlock } from "@/components/Sections";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQS } from "@/data/faq";
import { constructMetadata } from "@/lib/seo";
import { VerifiedMap } from "@/components/VerifiedMap";
export const metadata = constructMetadata({
  title: "Contact & Book Your Gulshan 2 Visit",
  description:
    "Contact Dhaka Spa Centre at House # 1/A, Road 90, Gulshan 2, Dhaka 1212. Call +8801609875990 or enquire through WhatsApp and Telegram.",
  path: "/contact",
});
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Visit us"
        title="Let your next pause begin."
        description="A question, a treatment preference or a date in mind. Start a conversation with our team and arrange your visit to Gulshan 2."
        path="/contact"
      />
      <section className="wrap page-body contact-grid">
        <div>
          <h2>Dhaka Spa Centre</h2>
          <p>{b.address.formatted}</p>
          <p>
            <a href={b.contact.telLink}>{b.contact.phoneFormatted}</a>
          </p>
          <div className="contact-links">
            <a className="text-link" href={b.contact.getWhatsAppBookingLink()}>
              WhatsApp ↗
            </a>
            <a className="text-link" href={b.telegramUrl}>
              Telegram ↗
            </a>
          </div>
          <p>
            {b.openingHours.display} Please confirm holiday hours and your appointment before travelling.
          </p>
          <a className="button outline" href={b.mapLink}>
            Directions to Road 90 ↗
          </a>
          <div className="section-gap">
            <FAQAccordion items={[FAQS[1], FAQS[4]]} />
          </div>
        </div>
        <ContactForm />
      </section>
      <VerifiedMap />
      <LocationBlock />
    </>
  );
}
