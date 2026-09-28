"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
export function Analytics() {
  const path = usePathname();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "true") return;
    const track = (event: string, extra: Record<string, unknown> = {}) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event, path, ...extra });
    };
    if (path.startsWith("/services/")) track("service_view");
    if (path === "/prices") track("price_view");
    const click = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target.closest("a") : null;
      if (!target) return;
      const href = target.getAttribute("href") || "";
      const event = href.includes("wa.me")
        ? "whatsapp_click"
        : href.startsWith("tel:")
          ? "phone_click"
          : href.includes("t.me/")
            ? "telegram_click"
            : href.includes("google.com/maps")
              ? "directions_click"
              : null;
      if (event) {
        track(event);
        if (event === "whatsapp_click") track("booking_click");
      }
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [path]);
  return null;
}
