import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/Sections";
import { constructMetadata } from "@/lib/seo";
import {
  generateLocalBusinessSchema,
  generateWebSiteSchema,
} from "@/lib/schema";
const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#29251f",
};
export const metadata: Metadata = {
  ...constructMetadata({
    title: "Dhaka Spa Centre | Thai Spa & Massage in Gulshan 2",
    description:
      "Explore Thai spa and massage at Dhaka Spa Centre in Gulshan 2, Dhaka. Compare treatments and guide prices, then call or enquire on WhatsApp to book.",
  }),
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={serif.variable + " " + sans.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileStickyBar />
        <Analytics />
        <JsonLd data={generateLocalBusinessSchema()} />
        <JsonLd data={generateWebSiteSchema()} />
      </body>
    </html>
  );
}
