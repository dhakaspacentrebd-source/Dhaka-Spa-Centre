import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { BUSINESS_INFO as b } from "@/data/business";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageIntro, BookingCTA, JsonLd } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/schema";
import { QuickFacts } from "@/components/QuickFacts";
import { VerifiedMap } from "@/components/VerifiedMap";
export const dynamicParams = false;
export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const l = LOCATIONS.find((x) => x.slug === location);
  return l
    ? constructMetadata({
        title:
          l.slug === "spa-near-me"
            ? "Find a Spa Near You | Gulshan 2 Directions"
            : "Spa " +
              (l.area === "Banani" || l.area === "Baridhara"
                ? "near "
                : "in ") +
              l.area +
              " | Visit Gulshan 2",
        description: l.intro,
        path: "/" + l.slug,
      })
    : { title: "Page not found", robots: { index: false } };
}
export default async function Page({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const l = LOCATIONS.find((x) => x.slug === location);
  if (!l) notFound();
  const faqs = l.faq.map(([question, answer]) => ({ question, answer }));
  return (
    <>
      <PageIntro
        eyebrow={l.area}
        title={l.title}
        description={l.intro}
        path={"/" + l.slug}
      />
      <section className="wrap page-body">
        <div className="prose">
          {l.blocks.map(([h, p]) => (
            <section key={h}>
              <h2>{h}</h2>
              <p>{p}</p>
            </section>
          ))}
          <h2>Your destination</h2>
          <p>
            {b.name}
            <br />
            {b.address.formatted}
            <br />
            <a href={b.contact.telLink}>{b.contact.phoneFormatted}</a>
          </p>
          <p>
            <a href={b.mapLink}>Open our Gulshan 2 Google Maps profile ↗</a>
          </p>
          <p>
            Compare the <Link href="/prices">complete price menu</Link>,{" "}
            <Link href="/contact">arrange your appointment</Link>, or read our{" "}
            <Link href="/blog/spa-etiquette-dhaka">
              first-visit preparation guide
            </Link>
            .
          </p>
          <h2>Questions about your journey</h2>
          <FAQAccordion items={faqs} />
        </div>
        <QuickFacts />
        <div className="section-heading">
          <div>
            <span className="eyebrow">TREATMENTS TO CONSIDER</span>
            <h2>Choose your pace.</h2>
          </div>
          <Link href="/services">All treatments ↗</Link>
        </div>
        <div className="service-grid">
          {SERVICES.filter((s) => l.services.includes(s.slug)).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="price-note">
          Prices shown are initial guides, pending confirmation. We have one
          listed physical address in Gulshan 2.
        </p>
      </section>
      {l.slug === "spa-in-gulshan-2" && <VerifiedMap />}
      <JsonLd data={generateFAQSchema(faqs)} />
      <BookingCTA />
    </>
  );
}
