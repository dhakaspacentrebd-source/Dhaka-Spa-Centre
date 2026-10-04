import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { BUSINESS_INFO as b } from "@/data/business";
import { generateBreadcrumbSchema } from "@/lib/schema";
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
  path,
}: {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
}) {
  const parent = path.startsWith("/services/")
    ? { name: "Treatments", url: "/services" }
    : path.startsWith("/blog/")
      ? { name: "Journal", url: "/blog" }
      : null;
  return (
    <section className="page-intro wrap">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        {parent && (
          <>
            <Link href={parent.url}>{parent.name}</Link>
            <span>/</span>
          </>
        )}
        <span aria-current="page">{eyebrow}</span>
      </nav>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          ...(parent ? [parent] : []),
          { name: eyebrow, url: path },
        ])}
      />
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
export function BookingCTA() {
  return (
    <section className="booking-section">
      <span className="eyebrow">MAKE TIME FOR YOURSELF</span>
      <h2>
        Your next moment of calm
        <br />
        starts here.
      </h2>
      <p>Choose your treatment. Let us help with the rest.</p>
      <a className="button light" href={b.contact.getWhatsAppBookingLink()}>
        Book on WhatsApp <ArrowUpRight size={17} />
      </a>
      <a className="text-link" href={b.contact.telLink}>
        Or call {b.contact.phoneFormatted}
      </a>
    </section>
  );
}
export function LocationBlock({ showMap = false }: { showMap?: boolean } = {}) {
  return (
    <section className="location-block wrap">
      <div>
        <span className="eyebrow">IN THE HEART OF GULSHAN 2</span>
        <h2>
          A pause, closer
          <br />
          than you think.
        </h2>
        <p>{b.address.formatted}</p>
        <a className="text-link" href={b.mapLink}>
          Find directions <ArrowUpRight size={16} />
        </a>
        {showMap && (
          <iframe
            src={b.mapEmbedUrl}
            title="Dhaka Spa Centre location in Gulshan 2, Dhaka"
            width="600"
            height="450"
            className="verified-map location-map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
      <div className="address-card">
        <MapPin size={30} strokeWidth={1} />
        <h3>Visit Dhaka Spa Centre</h3>
        <p>
          {b.address.street}
          <br />
          {b.address.neighborhood}, {b.address.city} {b.address.postalCode}
        </p>
        <p>
          {b.openingHours.display} Confirm holiday hours and your appointment before travelling.
        </p>
        <div className="area-links">
          {["Gulshan", "Banani", "Baridhara"].map((n) => (
            <Link key={n} href={"/spa-in-" + n.toLowerCase()}>
              {n} ↗
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
