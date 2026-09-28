import { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/data/business";
import { isPreviewDeployment } from "@/lib/deployment";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        ...(isPreviewDeployment
          ? { disallow: "/" }
          : { allow: "/", disallow: ["/api/"] }),
      },
    ],
    sitemap: `${BUSINESS_INFO.websiteUrl}/sitemap.xml`,
  };
}
