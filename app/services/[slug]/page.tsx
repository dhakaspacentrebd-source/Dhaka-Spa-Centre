import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import {
  SERVICES,
  getServiceBySlug,
  getRelatedServices,
} from "@/data/services";
import { PageIntro, BookingCTA, JsonLd } from "@/components/Sections";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingSelector } from "@/components/BookingSelector";
import { FAQAccordion } from "@/components/FAQAccordion";
import { constructMetadata } from "@/lib/seo";
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  return s
    ? constructMetadata({
        title: s.name + " in Dhaka",
        description: s.shortDescription + " Enquire in Gulshan 2.",
        path: "/services/" + s.slug,
      })
    : { title: "Treatment not found", robots: { index: false } };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "aroma-body-massage")
    permanentRedirect("/services/aromatherapy-massage");
  const s = getServiceBySlug(slug);
  if (!s) notFound();
  return (
    <>
      <PageIntro
        eyebrow={s.name}
        title={s.name + " in Gulshan 2"}
        description={s.tagline}
        path={"/services/" + s.slug}
      />
      <div className="wrap page-body">
        <Link className="text-link" href="/services">
          ← All treatments
        </Link>
        <div className="detail-grid section-gap">
          <div>
            <div className="detail-image">
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                priority
                sizes="(max-width:760px) 100vw,50vw"
              />
            </div>
            <p className="photo-caption">
              Illustrative wellness imagery; not a verified photograph of our
              premises.
            </p>
          </div>
          <div className="detail-info">
            <span className="eyebrow">{s.category}</span>
            <h2>What to expect</h2>
            {s.fullDescription.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <BookingSelector service={s} />
          </div>
        </div>
        <div className="prose">
          <h2>Make the session your own</h2>
          <ul>
            {s.expectations.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <h2>Is this your kind of treatment?</h2>
          <p>
            {s.suitableFor[0]} Choose according to your preferred technique and
            comfort level. A spa session is intended for relaxation, and results
            vary from person to person.
          </p>
          <p>
            Visit our <Link href="/spa-in-gulshan-2">Gulshan 2 location</Link>,
            compare <Link href="/prices">duration-based guide prices</Link>, or{" "}
            <Link href="/contact">talk to us before booking</Link>.
          </p>
          <h2>Before you book</h2>
          <FAQAccordion items={s.faqs} />
        </div>
        <div className="section-heading">
          <h2>Continue your discovery.</h2>
          <Link href="/services">All treatments ↗</Link>
        </div>
        <div className="service-grid">
          {getRelatedServices(s.slug).map((x) => (
            <ServiceCard service={x} key={x.slug} />
          ))}
        </div>
      </div>
      <JsonLd data={generateServiceSchema(s)} />
      <JsonLd data={generateFAQSchema(s.faqs)} />
      <BookingCTA />
    </>
  );
}
