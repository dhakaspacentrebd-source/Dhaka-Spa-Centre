import { BUSINESS_INFO as b } from "./business";
export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
export const FAQS: FAQItem[] = [
  {
    id: "location",
    category: "Location",
    question: "Where is Dhaka Spa Centre?",
    answer:
      b.address.formatted +
      ". Our physical location is in Gulshan 2; Banani and Baridhara are nearby service areas, not separate branches.",
  },
  {
    id: "book",
    category: "Booking",
    question: "How do I book an appointment?",
    answer:
      "Send your treatment, preferred date and duration to " +
      b.contact.phoneFormatted +
      " on WhatsApp. The team will confirm the available time and final price. You can also call or use Telegram.",
  },
  {
    id: "choose",
    category: "Treatments",
    question: "Which massage should I choose?",
    answer:
      "For assisted stretching, explore Thai massage. For flowing oil-based movements, compare Swedish and aromatherapy massage. Deep tissue focuses on firmer pressure; hot stone adds warmth. Ask the team if you are unsure.",
  },
  {
    id: "price",
    category: "Pricing",
    question: "How much does a session cost?",
    answer:
      "The treatment menu lists initial guide prices by duration. Some specialist treatments are priced on enquiry. Please confirm the current total and any applicable charges before reserving.",
  },
  {
    id: "hours",
    category: "Booking",
    question: "When can I visit?",
    answer:
      "Contact us to confirm opening hours and appointment availability for your preferred day before travelling.",
  },
  {
    id: "first",
    category: "Preparation",
    question: "What should I share before my first visit?",
    answer:
      "Mention your preferred pressure, any product sensitivities and any areas you want avoided. Ask what to wear and how early to arrive when the team confirms your booking.",
  },
];
