import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/data/services";
import { BUSINESS_INFO as b } from "@/data/business";
export function ServiceCard({
  service: s,
  priority = false,
}: {
  service: Service;
  priority?: boolean;
}) {
  return (
    <article className="treatment-card">
      <Link className="card-image" href={"/services/" + s.slug}>
        <Image
          src={s.image}
          quality={s.slug === "thai-massage" ? 65 : 75}
          alt={s.imageAlt}
          fill
          sizes="(max-width:500px) calc(100vw - 44px), (max-width:760px) calc((100vw - 69px) / 2), (max-width:1392px) calc((100vw - 176px) / 3), 405px"
          priority={priority}
        />
        <span aria-hidden="true">
          <ArrowUpRight size={22} />
        </span>
      </Link>
      <div className="card-meta">
        <span>{s.category}</span>
        <span>{s.duration}</span>
      </div>
      <h3>
        <Link href={"/services/" + s.slug}>{s.name}</Link>
      </h3>
      <p>{s.tagline}</p>
      <div className="card-bottom">
        <span>
          {s.numericPrice ? "From " : ""}
          {s.price}
        </span>
        <a href={b.contact.getWhatsAppBookingLink(s.name)}>Enquire & book ↗</a>
      </div>
    </article>
  );
}
