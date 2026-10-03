import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { BUSINESS_INFO as b } from "@/data/business";
import { SERVICES } from "@/data/services";
import { FAQS } from "@/data/faq";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BookingCTA, LocationBlock } from "@/components/Sections";
export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/dhaka-spa-hero.webp"
          alt="Illustrative spa interior with warm wood, soft lighting and a treatment bed"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow">DHAKA SPA CENTRE · GULSHAN 2</span>
          <h1>
            Dhaka Spa Centre.
            <br />
            <em>Gulshan 2, Dhaka.</em>
          </h1>
          <p>
            Thai spa & massage in Gulshan 2, Dhaka.
            <br />
            Step away from the everyday. Return to yourself.
          </p>
          <div className="hero-actions">
            <a
              className="button light"
              href={b.contact.getWhatsAppBookingLink()}
            >
              Book on WhatsApp <ArrowUpRight size={18} />
            </a>
            <a className="hero-call" href={b.contact.telLink}>
              Call now ↗
            </a>
          </div>
        </div>
        <div className="hero-foot">
          <span>THE ART OF SLOWING DOWN</span>
          <a href="#treatments">
            Explore treatments <ArrowDown size={15} />
          </a>
          <span>01 — WELLNESS, RECONSIDERED</span>
        </div>
      </section>
      <section className="intro wrap">
        <span className="eyebrow">A LITTLE SPACE. A DEEPER BREATH.</span>
        <div>
          <h2>
            Some moments
            <br />
            belong <em>only to you.</em>
          </h2>
          <div>
            <p>
              In a city that rarely pauses, make room for a different rhythm.
              Dhaka Spa Centre brings Thai-inspired bodywork and considered
              massage experiences to Gulshan 2.
            </p>
            <p>
              Whether you prefer gentle flowing touch or a more focused
              treatment, begin with what feels right for you.
            </p>
            <Link className="text-link" href="/about">
              Discover our story <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section id="treatments" className="treatments-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE TREATMENT COLLECTION</span>
              <h2>Find your kind of calm.</h2>
            </div>
            <Link className="text-link" href="/services">
              All treatments <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="service-grid">
            {SERVICES.slice(0, 3).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
      <section className="editorial">
        <div className="editorial-image">
          <Image
            src="/images/dhaka-spa-hot-stone.webp"
            alt="Illustrative hot stone wellness treatment"
            fill
            sizes="(max-width:760px) 100vw,50vw"
          />
        </div>
        <div className="editorial-copy">
          <span className="eyebrow">WARMTH. STILLNESS. TIME.</span>
          <h2>
            A ritual of
            <br />
            <em>letting go.</em>
          </h2>
          <p>
            Warm stones. An unhurried pace. A treatment that makes space for a
            gentler moment in your day.
          </p>
          <Link className="button outline" href="/services/hot-stone-massage">
            Discover hot stone <ArrowUpRight size={16} />
          </Link>
          <span className="image-note">Wellness imagery is illustrative.</span>
        </div>
      </section>
      <section className="wrap choosing">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A SESSION THAT SUITS YOU</span>
            <h2>Follow how you feel.</h2>
          </div>
          <Link href="/prices" className="text-link">
            Explore the price menu ↗
          </Link>
        </div>
        <div className="choice-grid">
          {[
            [
              "01",
              "Stretch & move",
              "Prefer pressure and assisted movement? Start with our Thai massage guide.",
              "thai-massage",
            ],
            [
              "02",
              "Soften & slow down",
              "For flowing touch and a sensory pause, explore aromatherapy.",
              "aromatherapy-massage",
            ],
            [
              "03",
              "Focus & unwind",
              "Prefer firmer attention to selected areas? Discover deep tissue massage.",
              "deep-tissue-massage",
            ],
          ].map(([i, t, d, s]) => (
            <Link href={"/services/" + s} key={i}>
              <span>{i}</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>
      <LocationBlock showMap />
      <section className="faq-section wrap">
        <div>
          <span className="eyebrow">BEFORE YOUR VISIT</span>
          <h2>
            A few things
            <br />
            you may wonder.
          </h2>
          <Link className="text-link" href="/faq">
            All your questions ↗
          </Link>
        </div>
        <FAQAccordion items={FAQS.slice(0, 4)} />
      </section>
      <BookingCTA />
    </>
  );
}
