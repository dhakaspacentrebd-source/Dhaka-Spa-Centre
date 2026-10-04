import { isPreviewDeployment } from "@/lib/deployment";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
const configuredId = process.env.NEXT_PUBLIC_GA_ID || "";
export const analyticsHost = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dhakaspacentre.com").hostname;
export const analyticsId = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true"
  && !isPreviewDeployment && /^G-[A-Z0-9]+$/.test(configuredId)
  ? configuredId : null;

// Never include booking fields, message URLs or query strings in event data.
export function trackAnalyticsEvent(event: string, extra: Record<string, string> = {}) {
  if (!analyticsId || typeof window === "undefined") return;
  if (window.location.hostname !== analyticsHost || window.location.protocol !== "https:") return;
  window.gtag?.("event", event, { page_path: window.location.pathname, ...extra });
}
