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
      b.openingHours.display + " Confirm holiday hours and appointment availability before travelling.",
  },
  {
    id: "first",
    category: "Preparation",
    question: "What should I share before my first visit?",
    answer:
      "Mention your preferred pressure, any product sensitivities and any areas you want avoided. Ask what to wear and how early to arrive when the team confirms your booking.",
  },
];

// Published answers distinguish preparation guidance from unconfirmed owner policies.
FAQS.push(...([
  ["booking-confirmation", "Booking", "Is a WhatsApp enquiry a confirmed booking?", "No. Sending an enquiry does not reserve a slot. Wait for the team to confirm your treatment, date, time, duration and final price."],
  ["walk-in", "Booking", "Can I arrive without an appointment?", "Walk-in availability has not been confirmed. Call or message before travelling so the team can check whether a session is available."],
  ["longer", "Pricing", "Are 90- and 120-minute prices available for every treatment?", "No. Where a duration is marked Enquire, the price has not been confirmed for publication. Ask the team for the duration and charge; do not assume a longer-session price from the 60-minute rate."],
  ["confirmed-prices", "Pricing", "Which 60-minute prices did the owner supply?", "Dry Massage ৳5,500; Oil Massage ৳6,500; Hot Oil Massage ৳7,000; Couple Massage ৳10,000; Four Hand Massage ৳12,000; Six Hand Massage ৳16,500. Confirm the current total and availability before booking."],
  ["charges", "Pricing", "Does the displayed price include every charge?", "The menu shows guide prices. Inclusion of any taxes, extras or other charges has not been supplied as a policy. Request the final total before confirming your appointment."],
  ["wear", "First Visit", "What should I wear?", "Ask for instructions for your chosen treatment. Comfortable clothing may suit stretching-based sessions; oil-based sessions may have different changing or draping arrangements. Confirm these rather than assuming."],
  ["arrival", "First Visit", "How early should I arrive?", "Ask the team when to arrive and whether changing or consultation time is part of the booked duration. No fixed arrival-time policy has been supplied."],
  ["pressure", "Treatments", "Can I ask for gentler pressure?", "Tell the team your pressure preference before starting and speak up if it becomes uncomfortable. Ask for an adjustment, a pause or a stop instead of assuming stronger pressure is more useful."],
  ["thai-oil", "Treatments", "How does Thai massage differ from an oil massage?", "Thai-style bodywork generally involves pressure and assisted movement; oil massage uses glide across the skin. Ask how the particular session is arranged and whether oil is used, since the actual format should be agreed before booking."],
  ["hot-stone", "Treatments", "What should I ask before hot stone massage?", "Discuss heat sensitivity, the stone temperature and which areas will be worked on. Ask how to signal discomfort, and avoid a heated treatment if your healthcare professional has advised against it."],
  ["medical", "Safety", "Is massage a replacement for medical care?", "No. These spa guides describe relaxation experiences, not diagnosis or treatment. Ask a qualified healthcare professional whether massage is appropriate if you have a condition, injury or uncertainty."],
  ["condition", "Safety", "What if I have an injury or recent surgery?", "Check with a qualified healthcare professional before booking. Tell the team about any areas that must be avoided and ask how to discuss relevant health details privately."],
  ["pregnancy", "Safety", "Can I book during pregnancy?", "Pregnancy-specific services and staff training have not been verified for this website. Ask your healthcare professional first and confirm whether the centre can provide an appropriate session before reserving."],
  ["oils", "Hygiene", "What if I am sensitive to oils or fragrance?", "Mention the sensitivity and ask for product ingredients and suitable alternatives. Product brands and fragrance-free options have not been confirmed. Do not assume every oil or gel is suitable for you."],
  ["cleaning", "Hygiene", "How can I check cleaning arrangements?", "Ask the team about linen changes, equipment cleaning and treatment surfaces between sessions. A detailed owner-approved hygiene policy has not yet been supplied for publication."],
  ["maps", "Directions", "Can I find the centre on Google Maps?", "Yes. The contact and Gulshan 2 pages include the owner-supplied Google Maps profile and embed. Use the full Road 90 address and confirm the appointment before travelling."],
  ["branches", "Location", "Is there a Banani or Baridhara branch?", "No separate branch is listed here. Visitors from Banani and Baridhara travel to the one listed Dhaka Spa Centre address in Gulshan 2."],
  ["parking", "Directions", "Is parking available?", "Parking arrangements have not been supplied for publication. Ask the team about parking, drop-off and building access before your journey."],
  ["travel", "Directions", "How long will the journey take?", "Journey time depends on your starting point and current Dhaka traffic. Check a live route near your departure time and allow room for delays; this website does not promise a fixed travel time."],
  ["payments", "Payments", "Which payment methods are accepted?", "Payment methods have not yet been confirmed for the website. Ask whether your preferred cash, card or mobile payment method is accepted before booking."],
  ["deposit", "Payments", "Do I need to pay a deposit?", "A deposit policy has not been supplied. Ask the team about any advance payment, its terms and how your booking will be confirmed."],
  ["cancel", "Cancellation", "How do I cancel or reschedule?", "Contact the team through your original booking channel as soon as your plans change. Cancellation deadlines, charges and refunds must be confirmed directly; no fixed policy is published here."],
  ["late", "Cancellation", "What happens if I am late?", "Let the team know promptly. Ask whether the appointment can move or whether the session duration changes. Late-arrival rules have not been supplied for publication."],
  ["couple", "Couples", "What should two guests confirm before a couple session?", "Confirm availability for both guests, each person's treatment and pressure preference, room arrangements and the total price. The owner supplied a 60-minute Couple Massage guide price of ৳10,000; confirm its scope directly."],
  ["gift", "Couples", "Can I arrange a spa gift or surprise visit?", "Ask whether a gift booking or voucher is available; no voucher policy has been confirmed. Check that the recipient wants the session and agrees to the treatment and timing."],
  ["consent", "Policies", "Can I pause or stop a session?", "State your boundaries before starting and request a pause or stop if you are uncomfortable. Ask the team to explain its consent process; a detailed written business policy has not yet been supplied."],
  ["privacy", "Policies", "How can I ask about changing and privacy?", "Contact the team about clothing, draping, changing space and who will be present for your chosen treatment. These arrangements are not verified on the website, so discuss them before booking."],
  ["photos", "Policies", "Are the gallery images actual centre photographs?", "The current gallery is illustrative. It does not claim to show verified photographs of Dhaka Spa Centre, its staff or its premises."],
  ["staff", "Policies", "Are practitioner qualifications listed?", "Verified staff biographies, qualifications and licences have not been supplied for publication. Ask the team about relevant training and experience before deciding on a session."],
  ["after", "First Visit", "What should I do after a session?", "Allow time to stand up and get dressed comfortably. Ask about removing oils or products and discuss any discomfort. Seek medical advice for concerning symptoms; a spa session is not medical care."],
] as string[][]).map(([id, category, question, answer]) => ({id, category, question, answer})));
