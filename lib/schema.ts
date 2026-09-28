import { BUSINESS_INFO as b } from "@/data/business";
import { Service } from "@/data/services";
import { BlogPost } from "@/data/blog";
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": b.websiteUrl + "/#business",
    name: b.name,
    url: b.websiteUrl,
    telephone: b.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address.street,
      addressLocality: "Gulshan 2",
      addressRegion: "Dhaka",
      postalCode: "1212",
      addressCountry: "BD",
    },
    areaServed: ["Gulshan 2", "Gulshan", "Banani", "Baridhara", "Dhaka"],
    sameAs: [b.telegramUrl],
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
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": b.websiteUrl + "/#organization",
    name: b.name,
    url: b.websiteUrl,
    logo: b.websiteUrl + "/brand/logo.svg",
    telephone: b.contact.phone,
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
    name: s.name,
    description: s.shortDescription,
    url: b.websiteUrl + "/services/" + s.slug,
    provider: { "@id": b.websiteUrl + "/#business" },
    areaServed: "Gulshan 2, Dhaka",
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
    "@type": "Article",
    headline: p.title,
    description: p.excerpt,
    author: { "@type": "Organization", name: b.name },
    mainEntityOfPage: b.websiteUrl + "/blog/" + p.slug,
  };
}
