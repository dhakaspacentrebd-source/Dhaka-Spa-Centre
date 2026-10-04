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
import { SESSION_GUIDES } from "@/data/session-guides";
import { QuickFacts } from "@/components/QuickFacts";
import { SERVICE_SEARCH_DESCRIPTIONS } from "@/data/search-descriptions";
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
        description: (s.shortDescription + " Enquire in Gulshan 2.").length > 160
          ? SERVICE_SEARCH_DESCRIPTIONS[s.slug] || s.shortDescription
          : s.shortDescription + " Enquire in Gulshan 2.",
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
  const guide = SESSION_GUIDES[s.slug];
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
                quality={s.slug === "thai-massage" ? 65 : 75}
                alt={s.imageAlt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width:760px) calc(100vw - 44px), (max-width:1392px) calc((100vw - 177px) / 2), 608px"
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
          {guide && <section>
            <h2>Pressure, technique and products</h2>
            <p>{guide.pressure}</p><p>{guide.products}</p>
            <h2>Duration and preparation</h2>
            <p>The listed starting duration is {s.duration}. Check the duration options above; where a price says “Enquire”, ask for a quote. Confirm whether changing or consultation time is included.</p>
            <p>{guide.preparation}</p>
            <h2>After your session</h2><p>{guide.aftercare}</p>
            <h2>When to check suitability first</h2><p>{guide.safety}</p>
            <p>Read our <Link href="/safety">safety, hygiene and consent questions</Link> before booking. For health-related uncertainty, consult a qualified healthcare professional. The <a href="https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know">NCCIH massage overview</a> describes general safety considerations; these spa guides are not medical advice.</p>
          </section>}
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
        <QuickFacts />
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
