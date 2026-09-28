import path from "node:path";
import { fileURLToPath } from "node:url";

if (
  process.env.VERCEL_ENV === "production" &&
  !process.env.NEXT_PUBLIC_SITE_URL
) {
  throw new Error(
    "Set NEXT_PUBLIC_SITE_URL to the final HTTPS domain before production deployment.",
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.dirname(fileURLToPath(import.meta.url)),
  poweredByHeader: false,
  redirects: async () => [{
    source: '/services/aroma-body-massage',
    destination: '/services/aromatherapy-massage',
    permanent: true,
  }],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "Referrer-Policy",
          value: "origin-when-cross-origin",
        },
      ],
    },
  ],
};

export default nextConfig;
