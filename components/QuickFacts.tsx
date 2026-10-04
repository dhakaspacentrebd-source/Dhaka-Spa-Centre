import Link from "next/link";
import { BUSINESS_INFO as b } from "@/data/business";

export function QuickFacts() {
  return (
    <section className="quick-facts section-gap" aria-label="Dhaka Spa Centre quick facts">
      <span className="eyebrow">Plan your visit</span>
      <h2>Dhaka Spa Centre at a glance</h2>
      <p>Dhaka Spa Centre is a Thai spa and massage centre at {b.address.formatted}. Visitors from {b.serviceAreas.join(", ")} can arrange a session at this Gulshan 2 address. Confirm the treatment, time and total price before travelling; Banani and Baridhara are service areas, not branches.</p>
      <dl>
        <div><dt>Business</dt><dd>{b.name}</dd></div>
        <div><dt>Address</dt><dd>{b.address.formatted}</dd></div>
        <div><dt>Phone</dt><dd><a href={b.contact.telLink}>{b.contact.phoneFormatted}</a></dd></div>
        <div><dt>Opening hours</dt><dd>{b.openingHours.display} Confirm holiday hours and your appointment.</dd></div>
        <div><dt>Booking</dt><dd><a href={b.contact.getWhatsAppBookingLink()}>WhatsApp</a>, <a href={b.contact.telLink}>call</a> or <a href={b.telegramUrl}>Telegram</a>; wait for confirmation.</dd></div>
      </dl>
      <p><Link href="/ai-facts">Business facts and confirmed guide prices</Link> · <Link href="/safety">Preparation, safety and consent questions</Link></p>
    </section>
  );
}
