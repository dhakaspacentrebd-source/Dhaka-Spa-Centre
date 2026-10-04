"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { analyticsId, trackAnalyticsEvent } from "@/lib/analytics";
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
export function Analytics() {
  const path = usePathname();
  const [ready, setReady] = useState(false);
  const lastPath = useRef<string | null>(null);
  useEffect(() => {
    if (!analyticsId || !ready) return;
    const track = (event: string, extra: Record<string, unknown> = {}) => {
      trackAnalyticsEvent(event, extra as Record<string, string>);
    };
    if (lastPath.current !== path) {
      lastPath.current = path;
      track("page_view", { page_location: window.location.origin + path, page_title: document.title });
      if (path.startsWith("/services/")) track("service_view");
      if (path === "/prices") track("price_view");
    }
    const click = (e: MouseEvent) => {
      if (!e.isTrusted) return;
      const target = e.target instanceof Element ? e.target.closest("a") : null;
      if (!target) return;
      const href = target.getAttribute("href") || "";
      const event = href.includes("wa.me")
        ? "whatsapp_click"
        : href.startsWith("tel:")
          ? "call_click"
          : href.includes("t.me/")
            ? "telegram_click"
            : href.includes("google.com/maps") || href.startsWith("https://share.google/") || href.startsWith("https://maps.app.goo.gl/")
              ? "directions_click"
              : null;
      if (event) {
        track(event);
        if (event === "whatsapp_click") track("booking_click");
      }
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [path, ready]);
  if (!analyticsId) return null;
  return <>
    <Script id="ga-bootstrap" strategy="afterInteractive" onReady={() => setReady(true)}>{`
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){window.dataLayer.push(arguments);};
      window.gtag('js', new Date());
      window.gtag('config', '${analyticsId}', {
        send_page_view: false,
        page_location: window.location.origin + window.location.pathname,
        page_referrer: document.referrer ? document.referrer.split('?')[0].split('#')[0] : '',
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    `}</Script>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} strategy="afterInteractive" />
  </>;
}
