import Link from "next/link";
import { Brand } from "./Brand";
import { BUSINESS_INFO as b } from "@/data/business";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Brand />
          <p>
            Thoughtful wellness.
            <br />A little time, entirely yours.
          </p>
          <p>{b.address.formatted}</p>
          <a href={b.contact.telLink}>{b.contact.phoneFormatted}</a>
        </div>
        <div>
          <h3>The collection</h3>
          {[
            ["Thai massage", "thai-massage"],
            ["Aromatherapy", "aromatherapy-massage"],
            ["Deep tissue", "deep-tissue-massage"],
            ["Hot stone", "hot-stone-massage"],
          ].map(([n, s]) => (
            <Link key={s} href={"/services/" + s}>
              {n}
            </Link>
          ))}
          <Link href="/prices">Treatment prices</Link>
        </div>
        <div>
          <h3>Explore</h3>
          {[
            ["Our story", "about"],
            ["Gallery", "gallery"],
            ["Journal", "blog"],
            ["Questions", "faq"],
            ["Offers", "offers"],
            ["Contact", "contact"],
            ["Safety & consent", "safety"],
            ["Business facts", "ai-facts"],
          ].map(([n, s]) => (
            <Link key={s} href={"/" + s}>
              {n}
            </Link>
          ))}
        </div>
        <div>
          <h3>Find your way</h3>
          {["Dhaka", "Gulshan", "Gulshan 2", "Banani", "Baridhara"].map((n) => (
            <Link
              key={n}
              href={"/spa-in-" + n.toLowerCase().replaceAll(" ", "-")}
            >
              {n}
            </Link>
          ))}
          <Link href="/spa-near-me">Find a spa near you</Link>
          <a href={b.telegramUrl}>Telegram ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Dhaka Spa Centre</span>
        <span>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </span>
        <span>GULSHAN 2, DHAKA · BANGLADESH</span>
      </div>
    </footer>
  );
}
