import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { PageIntro, BookingCTA } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({
  title: "Massage & Spa Treatments in Gulshan",
  description:
    "Compare Thai, Swedish, deep tissue, aromatherapy and specialist massage options. Choose a duration and enquire with Dhaka Spa Centre in Gulshan 2.",
  path: "/services",
});
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Treatments"
        title="A little time. A world of difference."
        description="From traditional bodywork to flowing oil rituals, find a treatment that fits your pace. Specialist treatments and all appointments are subject to confirmation."
        path="/services"
      />
      <section className="page-body wrap">
        <h2 className="sr-only">Massage and spa treatments</h2>
        <div className="service-grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
