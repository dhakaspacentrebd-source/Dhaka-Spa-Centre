"use client";
import { useState } from "react";
import { SERVICES } from "@/data/services";
import { BUSINESS_INFO as b } from "@/data/business";
export function ContactForm() {
  const [ready, setReady] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message =
      "Hello Dhaka Spa Centre, my name is " +
      data.get("name") +
      ". I would like to enquire about " +
      data.get("service") +
      " on " +
      data.get("date") +
      ". Notes: " +
      data.get("message");
    const url = b.contact.whatsappLink + "?text=" + encodeURIComponent(message);
    setReady(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <form className="booking-form" onSubmit={submit}>
      <h2>Plan your visit</h2>
      <p>
        Your request opens in WhatsApp. A booking is confirmed only when our
        team replies.
      </p>
      <label htmlFor="guest-name">Your name</label>
      <input
        id="guest-name"
        name="name"
        autoComplete="name"
        required
        maxLength={80}
      />
      <label htmlFor="treatment">Preferred treatment</label>
      <select name="service" id="treatment">
        {SERVICES.map((s) => (
          <option key={s.slug}>{s.name}</option>
        ))}
      </select>
      <label htmlFor="visit-date">Preferred date</label>
      <input
        id="visit-date"
        name="date"
        type="date"
        min={new Date().toLocaleDateString("en-CA")}
        required
      />
      <label htmlFor="notes">
        Anything you would like us to know? (optional)
      </label>
      <textarea name="message" id="notes" rows={3} maxLength={500} />
      <button className="button" type="submit">
        Continue to WhatsApp ↗
      </button>
      {ready && (
        <p role="status">
          Your message is ready.{" "}
          <a
            className="text-link"
            href={ready}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open WhatsApp
          </a>{" "}
          to send it.
        </p>
      )}
    </form>
  );
}
