import { Phone, MessageCircle, Send } from "lucide-react";
import { BUSINESS_INFO as b } from "@/data/business";
export function MobileStickyBar() {
  return (
    <nav aria-label="Quick booking" className="mobile-booking">
      <a href={b.contact.telLink}>
        <Phone size={17} />
        Call
      </a>
      <a href={b.contact.getWhatsAppBookingLink()}>
        <MessageCircle size={17} />
        WhatsApp
      </a>
      <a href={b.telegramUrl}>
        <Send size={17} />
        Telegram
      </a>
    </nav>
  );
}
