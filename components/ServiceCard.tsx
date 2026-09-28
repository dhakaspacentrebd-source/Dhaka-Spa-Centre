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
          alt={s.imageAlt}
          fill
          sizes="(max-width:650px) 100vw,(max-width:1000px) 50vw,33vw"
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
