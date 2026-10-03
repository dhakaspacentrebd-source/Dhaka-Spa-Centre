import { BUSINESS_INFO as b } from "@/data/business";

export function VerifiedMap() {
  return (
    <section className="wrap section-gap map-section">
      <h2>Find Dhaka Spa Centre in Gulshan 2</h2>
      <p>{b.address.formatted}. Check your route and confirm appointment availability before setting off.</p>
      <iframe src={b.mapEmbedUrl} title="Dhaka Spa Centre location in Gulshan 2, Dhaka" width="1280" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="verified-map" />
      <p><a className="text-link" href={b.mapLink}>Open the Google Maps profile ↗</a></p>
    </section>
  );
}
