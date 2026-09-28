import { Metadata } from "next";
import { BUSINESS_INFO } from "@/data/business";
import { isPreviewDeployment } from "@/lib/deployment";

export interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/brand/og-image.webp",
  type = "website",
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${BUSINESS_INFO.websiteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const fullTitle = title.includes("Dhaka Spa Centre")
    ? title
    : `${title} | Dhaka Spa Centre`;

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(BUSINESS_INFO.websiteUrl),
    alternates: {
      canonical: url,
    },
    robots:
      noIndex || isPreviewDeployment
        ? {
            index: false,
            follow: false,
          }
        : {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              "max-video-preview": -1,
              "max-image-preview": "large",
              "max-snippet": -1,
            },
          },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS_INFO.name,
      locale: "en_US",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${fullTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
