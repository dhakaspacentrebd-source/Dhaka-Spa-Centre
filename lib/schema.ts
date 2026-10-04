import { BUSINESS_INFO as b } from "@/data/business";
import { Service } from "@/data/services";
import { BlogPost } from "@/data/blog";
import { VERIFIED_PRICE_SLUGS } from "@/data/verified-prices";
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": b.websiteUrl + "/#business",
    name: b.name,
    url: b.websiteUrl,
    telephone: b.contact.phone,
    logo: b.websiteUrl + "/brand/logo.svg",
    hasMap: b.googleBusinessProfileUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address.street + ", " + b.address.neighborhood,
      addressLocality: b.address.city,
      addressRegion: b.address.city,
      postalCode: b.address.postalCode,
      addressCountry: "BD",
    },
    areaServed: b.serviceAreas,
    openingHoursSpecification: b.openingHours.schedule.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek.map((day) => "https://schema.org/" + day),
      opens: hours.opens,
      closes: hours.closes,
    })),
    sameAs: [b.telegramUrl, b.googleBusinessProfileUrl],
  };
}
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": b.websiteUrl + "/#website",
    url: b.websiteUrl,
    name: b.name,
    publisher: { "@id": b.websiteUrl + "/#business" },
  };
}
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((x, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: x.name,
      item: x.url.startsWith("http") ? x.url : b.websiteUrl + x.url,
    })),
  };
}
export function generateServiceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": b.websiteUrl + "/services/" + s.slug + "#service",
    name: s.name,
    description: s.shortDescription,
    url: b.websiteUrl + "/services/" + s.slug,
    provider: { "@id": b.websiteUrl + "/#business" },
    areaServed: "Gulshan 2, Dhaka",
    ...(VERIFIED_PRICE_SLUGS.includes(s.slug) ? {
      offers: {
        "@type": "Offer",
        name: s.name + " — 60-minute guide price; confirm before booking",
        price: s.numericPrice,
        priceCurrency: s.currency,
        url: b.websiteUrl + "/services/" + s.slug,
        seller: { "@id": b.websiteUrl + "/#business" },
      },
    } : {}),
  };
}
export function generateFAQSchema(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((x) => ({
      "@type": "Question",
      name: x.question,
      acceptedAnswer: { "@type": "Answer", text: x.answer },
    })),
  };
}
export function generateArticleSchema(p: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": b.websiteUrl + "/blog/" + p.slug + "#article",
    headline: p.title,
    description: p.excerpt,
    author: { "@id": b.websiteUrl + "/#business" },
    publisher: { "@id": b.websiteUrl + "/#business" },
    image: b.websiteUrl + p.image,
    mainEntityOfPage: b.websiteUrl + "/blog/" + p.slug,
  };
}
