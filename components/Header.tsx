"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand } from "./Brand";
import { BUSINESS_INFO as b } from "@/data/business";
const links = [
  ["Treatments", "/services"],
  ["Prices", "/prices"],
  ["Our story", "/about"],
  ["Gallery", "/gallery"],
  ["Journal", "/blog"],
  ["Visit us", "/contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <div className="topline">
        <span>GULSHAN 2 · DHAKA</span>
        <a href={b.contact.telLink}>
          Reservations &nbsp; {b.contact.phoneFormatted}
        </a>
      </div>
      <header className="header">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          className="button small header-book"
          href={b.contact.getWhatsAppBookingLink()}
        >
          Book a visit <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {links.map(([label, href]) => (
              <Link onClick={() => setOpen(false)} key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link onClick={() => setOpen(false)} href="/spa-in-gulshan-2">
              Gulshan 2 location
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
