import { MetadataRoute } from "next";
import { BUSINESS_INFO as b } from "@/data/business";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { BLOG_POSTS } from "@/data/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/services",
    "/prices",
    "/about",
    "/contact",
    "/gallery",
    "/faq",
    "/offers",
    "/blog",
    "/privacy-policy",
    "/terms",
    "/ai-facts",
    "/safety",
    ...SERVICES.map((s) => "/services/" + s.slug),
    ...LOCATIONS.map((l) => "/" + l.slug),
    ...BLOG_POSTS.map((p) => "/blog/" + p.slug),
  ].map((path) => ({
    url: b.websiteUrl + path,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
