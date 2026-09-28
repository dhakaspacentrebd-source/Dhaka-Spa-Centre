"use client";
import { useState } from "react";
import { Service, ServiceDuration } from "@/data/services";
import { BUSINESS_INFO as b } from "@/data/business";
export function BookingSelector({ service: s }: { service: Service }) {
  const [duration, setDuration] = useState<ServiceDuration>(
    s.duration.startsWith("90") ? "90 MIN" : "60 MIN",
  );
  return (
    <div>
      <span className="eyebrow">YOUR TIME, YOUR CHOICE</span>
      <div className="duration-buttons" aria-label="Choose a session duration">
        {(["60 MIN", "90 MIN", "120 MIN"] as ServiceDuration[]).map((d) => (
          <button
            key={d}
            onClick={() => setDuration(d)}
            aria-pressed={duration === d}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="chosen-price" aria-live="polite">
        {s.durationPricing[duration]}
      </div>
      <p className="price-note">
        Initial guide prices. Confirm the current price, treatment availability
        and duration with the team before booking.
      </p>
      <a
        className="button"
        href={b.contact.getWhatsAppBookingLink(
          s.name +
            " — " +
            duration +
            " (guide price: " +
            s.durationPricing[duration] +
            ")",
        )}
      >
        Enquire on WhatsApp ↗
      </a>
    </div>
  );
}
