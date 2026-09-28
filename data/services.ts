export type ServiceDuration = "60 MIN" | "90 MIN" | "120 MIN";
export interface ServiceFAQ {
  question: string;
  answer: string;
}
export const SERVICES = [
  {
    slug: "thai-massage",
    name: "Thai Massage",
    category: "Traditional & Mobility",
    tagline: "Rhythmic pressure. A little more room to move.",
    shortDescription:
      "Thai-inspired massage combines steady pressure with assisted stretches. Choose this treatment if you prefer active bodywork to an oil-led massage.",
    fullDescription: [
      "Thai-inspired massage combines steady pressure with assisted stretches. Choose this treatment if you prefer active bodywork to an oil-led massage.",
      "Discuss the stretch intensity before starting; you can ask to keep movements gentle.",
    ],
    expectations: [
      "Discuss the stretch intensity before starting; you can ask to keep movements gentle.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "Rhythmic pressure. A little more room to move.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before thai massage?",
        answer:
          "Discuss the stretch intensity before starting; you can ask to keep movements gentle.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-thai-massage.webp",
    imageAlt: "Illustrative thai massage wellness imagery",
    numericPrice: 5200,
    price: "৳5,200",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳5,200",
      "90 MIN": "৳7,000",
      "120 MIN": "Enquire",
    },
    featured: true,
  },
  {
    slug: "aromatherapy-massage",
    name: "Aromatherapy Massage",
    category: "Oil & Warmth",
    tagline: "Gentle touch, with a botanical note.",
    shortDescription:
      "An oil-based massage with an emphasis on flowing movements and fragrance. A considered choice when you want a slower, sensory-led session.",
    fullDescription: [
      "An oil-based massage with an emphasis on flowing movements and fragrance. A considered choice when you want a slower, sensory-led session.",
      "Ask which oils are available and mention fragrance sensitivities before booking.",
    ],
    expectations: [
      "Ask which oils are available and mention fragrance sensitivities before booking.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "Gentle touch, with a botanical note.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before aromatherapy massage?",
        answer:
          "Ask which oils are available and mention fragrance sensitivities before booking.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-aroma-oil.webp",
    imageAlt: "Illustrative aromatherapy massage wellness imagery",
    numericPrice: 5500,
    price: "৳5,500",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳5,500",
      "90 MIN": "৳7,200",
      "120 MIN": "Enquire",
    },
    featured: true,
  },
  {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    category: "Therapeutic & Deep Pressure",
    tagline: "Focused attention. A firmer rhythm.",
    shortDescription:
      "A pressure-focused massage that spends more time on selected areas. Discuss the places you would like attention and the pressure you find comfortable.",
    fullDescription: [
      "A pressure-focused massage that spends more time on selected areas. Discuss the places you would like attention and the pressure you find comfortable.",
      "Firmer does not have to mean painful. Ask for pressure to be reduced whenever needed.",
    ],
    expectations: [
      "Firmer does not have to mean painful. Ask for pressure to be reduced whenever needed.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "Focused attention. A firmer rhythm.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before deep tissue massage?",
        answer:
          "Firmer does not have to mean painful. Ask for pressure to be reduced whenever needed.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-deep-tissue.webp",
    imageAlt: "Illustrative deep tissue massage wellness imagery",
    numericPrice: 6000,
    price: "৳6,000",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳6,000",
      "90 MIN": "৳8,000",
      "120 MIN": "Enquire",
    },
    featured: true,
  },
  {
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    category: "Oil & Warmth",
    tagline: "Warmth that invites you to slow down.",
    shortDescription:
      "A massage combining warmed stones with hands-on techniques. The warmth adds a different sensory quality to an unhurried appointment.",
    fullDescription: [
      "A massage combining warmed stones with hands-on techniques. The warmth adds a different sensory quality to an unhurried appointment.",
      "Discuss heat tolerance first and ask how the stones will be used in your session.",
    ],
    expectations: [
      "Discuss heat tolerance first and ask how the stones will be used in your session.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "Warmth that invites you to slow down.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before hot stone massage?",
        answer:
          "Discuss heat tolerance first and ask how the stones will be used in your session.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-hot-stone.webp",
    imageAlt: "Illustrative hot stone massage wellness imagery",
    numericPrice: 7500,
    price: "৳7,500",
    currency: "BDT",
    duration: "90 minutes",
    durationPricing: {
      "60 MIN": "Enquire",
      "90 MIN": "৳7,500",
      "120 MIN": "৳10,000",
    },
    featured: true,
  },
  {
    slug: "full-body-massage",
    name: "Full Body Massage",
    category: "Signature & Sensory",
    tagline: "Time for the whole of you.",
    shortDescription:
      "A balanced massage covering several areas rather than concentrating on a single spot. Talk through the areas you want included and any you prefer to avoid.",
    fullDescription: [
      "A balanced massage covering several areas rather than concentrating on a single spot. Talk through the areas you want included and any you prefer to avoid.",
      "A longer session allows more time across the back, shoulders, arms and legs.",
    ],
    expectations: [
      "A longer session allows more time across the back, shoulders, arms and legs.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "Time for the whole of you.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before full body massage?",
        answer:
          "A longer session allows more time across the back, shoulders, arms and legs.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-dry-massage.webp",
    imageAlt: "Illustrative full body massage wellness imagery",
    numericPrice: 6000,
    price: "৳6,000",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳6,000",
      "90 MIN": "৳8,000",
      "120 MIN": "Enquire",
    },
    featured: false,
  },
  {
    slug: "swedish-massage",
    name: "Swedish Massage",
    category: "Oil & Warmth",
    tagline: "Long strokes. A softer pace.",
    shortDescription:
      "Swedish-style massage uses gliding movements and gentle kneading. It is an approachable option for guests who enjoy a flowing oil-based treatment.",
    fullDescription: [
      "Swedish-style massage uses gliding movements and gentle kneading. It is an approachable option for guests who enjoy a flowing oil-based treatment.",
      "Tell the team whether you prefer light or moderate pressure before the session begins.",
    ],
    expectations: [
      "Tell the team whether you prefer light or moderate pressure before the session begins.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "Long strokes. A softer pace.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before swedish massage?",
        answer:
          "Tell the team whether you prefer light or moderate pressure before the session begins.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-aroma-oil.webp",
    imageAlt: "Illustrative swedish massage wellness imagery",
    numericPrice: 5500,
    price: "৳5,500",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳5,500",
      "90 MIN": "৳7,200",
      "120 MIN": "Enquire",
    },
    featured: false,
  },
  {
    slug: "foot-massage",
    name: "Foot Massage",
    category: "Traditional & Mobility",
    tagline: "A pause for tired feet.",
    shortDescription:
      "Focused massage for the feet and lower legs, suited to guests who prefer a smaller treatment area after a day spent on their feet.",
    fullDescription: [
      "Focused massage for the feet and lower legs, suited to guests who prefer a smaller treatment area after a day spent on their feet.",
      "Ask the team which areas and techniques are included in the booked duration.",
    ],
    expectations: [
      "Ask the team which areas and techniques are included in the booked duration.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "A pause for tired feet.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before foot massage?",
        answer:
          "Ask the team which areas and techniques are included in the booked duration.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-dry-massage.webp",
    imageAlt: "Illustrative foot massage wellness imagery",
    numericPrice: 8000,
    price: "৳8,000",
    currency: "BDT",
    duration: "90 minutes",
    durationPricing: {
      "60 MIN": "Enquire",
      "90 MIN": "৳8,000",
      "120 MIN": "৳11,000",
    },
    featured: false,
  },
  {
    slug: "body-scrub",
    name: "Body Scrub",
    category: "Signature & Sensory",
    tagline: "A fresh start for your skin.",
    shortDescription:
      "An exfoliation treatment rather than a massage. Ask about the scrub ingredients, the treatment steps and availability before arranging your visit.",
    fullDescription: [
      "An exfoliation treatment rather than a massage. Ask about the scrub ingredients, the treatment steps and availability before arranging your visit.",
      "Mention any product sensitivity and confirm whether rinsing time is included.",
    ],
    expectations: [
      "Mention any product sensitivity and confirm whether rinsing time is included.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "A fresh start for your skin.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before body scrub?",
        answer:
          "Mention any product sensitivity and confirm whether rinsing time is included.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-aroma-oil.webp",
    imageAlt: "Illustrative body scrub wellness imagery",
    numericPrice: null,
    price: "Enquire",
    currency: "BDT",
    duration: "By arrangement",
    durationPricing: {
      "60 MIN": "Enquire",
      "90 MIN": "Enquire",
      "120 MIN": "Enquire",
    },
    featured: false,
  },
  {
    slug: "dry-massage",
    name: "Dry Massage",
    category: "Traditional & Mobility",
    tagline: "Simple, oil-free bodywork.",
    shortDescription:
      "Pressure-based bodywork for guests who prefer to avoid oils. Discuss clothing, pressure and the areas to focus on when arranging your appointment.",
    fullDescription: [
      "Pressure-based bodywork for guests who prefer to avoid oils. Discuss clothing, pressure and the areas to focus on when arranging your appointment.",
      "Confirm the style of dry massage and suitable clothing with the team.",
    ],
    expectations: [
      "Confirm the style of dry massage and suitable clothing with the team.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "Simple, oil-free bodywork.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before dry massage?",
        answer:
          "Confirm the style of dry massage and suitable clothing with the team.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-dry-massage.webp",
    imageAlt: "Illustrative dry massage wellness imagery",
    numericPrice: 5500,
    price: "৳5,500",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳5,500",
      "90 MIN": "Enquire",
      "120 MIN": "Enquire",
    },
    featured: false,
  },
  {
    slug: "oil-massage",
    name: "Oil Massage",
    category: "Oil & Warmth",
    tagline: "Easy movement, flowing touch.",
    shortDescription:
      "Oil creates glide for longer massage strokes. This option suits guests who prefer fluid movement over assisted stretching.",
    fullDescription: [
      "Oil creates glide for longer massage strokes. This option suits guests who prefer fluid movement over assisted stretching.",
      "Check the oil ingredients and share your preference for scented or unscented products.",
    ],
    expectations: [
      "Check the oil ingredients and share your preference for scented or unscented products.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "Easy movement, flowing touch.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before oil massage?",
        answer:
          "Check the oil ingredients and share your preference for scented or unscented products.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-aroma-oil.webp",
    imageAlt: "Illustrative oil massage wellness imagery",
    numericPrice: 6500,
    price: "৳6,500",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳6,500",
      "90 MIN": "Enquire",
      "120 MIN": "Enquire",
    },
    featured: false,
  },
  {
    slug: "hot-oil-massage",
    name: "Hot Oil Massage",
    category: "Oil & Warmth",
    tagline: "A warmer take on an oil ritual.",
    shortDescription:
      "A warm-oil massage enquiry for guests who enjoy gentle warmth alongside flowing bodywork. Ask the team about current availability and products.",
    fullDescription: [
      "A warm-oil massage enquiry for guests who enjoy gentle warmth alongside flowing bodywork. Ask the team about current availability and products.",
      "Discuss your heat preference before any warmed oil is applied.",
    ],
    expectations: [
      "Discuss your heat preference before any warmed oil is applied.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "A warmer take on an oil ritual.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before hot oil massage?",
        answer:
          "Discuss your heat preference before any warmed oil is applied.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-hot-oil.webp",
    imageAlt: "Illustrative hot oil massage wellness imagery",
    numericPrice: 7000,
    price: "৳7,000",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳7,000",
      "90 MIN": "Enquire",
      "120 MIN": "Enquire",
    },
    featured: false,
  },
  {
    slug: "body-to-body-massage",
    name: "Body To Body Massage",
    category: "Signature & Sensory",
    tagline: "A specialist session, discussed in advance.",
    shortDescription:
      "A specialist treatment option from the existing menu. Contact the team to understand the technique, boundaries and current availability before making a reservation.",
    fullDescription: [
      "A specialist treatment option from the existing menu. Contact the team to understand the technique, boundaries and current availability before making a reservation.",
      "Confirm exactly what is included, your preferences and the total price in advance.",
    ],
    expectations: [
      "Confirm exactly what is included, your preferences and the total price in advance.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "A specialist session, discussed in advance.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before body to body massage?",
        answer:
          "Confirm exactly what is included, your preferences and the total price in advance.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-hero.webp",
    imageAlt: "Illustrative body to body massage wellness imagery",
    numericPrice: 7500,
    price: "৳7,500",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳7,500",
      "90 MIN": "৳10,000",
      "120 MIN": "Enquire",
    },
    featured: false,
  },
  {
    slug: "nuru-massage",
    name: "Nuru Massage",
    category: "Signature & Sensory",
    tagline: "A gel-based treatment enquiry.",
    shortDescription:
      "A gel-based treatment option. Ask the team to explain the session format, product ingredients and availability so you can make an informed choice.",
    fullDescription: [
      "A gel-based treatment option. Ask the team to explain the session format, product ingredients and availability so you can make an informed choice.",
      "Discuss product sensitivity, boundaries and preparation before booking.",
    ],
    expectations: [
      "Discuss product sensitivity, boundaries and preparation before booking.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "A gel-based treatment enquiry.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before nuru massage?",
        answer:
          "Discuss product sensitivity, boundaries and preparation before booking.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-nuru.webp",
    imageAlt: "Illustrative nuru massage wellness imagery",
    numericPrice: 9500,
    price: "৳9,500",
    currency: "BDT",
    duration: "90 minutes",
    durationPricing: {
      "60 MIN": "Enquire",
      "90 MIN": "৳9,500",
      "120 MIN": "৳12,500",
    },
    featured: false,
  },
  {
    slug: "couple-massage",
    name: "Couple Massage",
    category: "Specialty & Suites",
    tagline: "Make space for time together.",
    shortDescription:
      "An appointment enquiry for two guests. Contact the team to confirm whether simultaneous sessions and your preferred treatments can be arranged.",
    fullDescription: [
      "An appointment enquiry for two guests. Contact the team to confirm whether simultaneous sessions and your preferred treatments can be arranged.",
      "Confirm whether the quotation is per guest or for both guests, and ask about room arrangements.",
    ],
    expectations: [
      "Confirm whether the quotation is per guest or for both guests, and ask about room arrangements.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "Make space for time together.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before couple massage?",
        answer:
          "Confirm whether the quotation is per guest or for both guests, and ask about room arrangements.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-couple-suite.webp",
    imageAlt: "Illustrative couple massage wellness imagery",
    numericPrice: 10000,
    price: "৳10,000",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳10,000",
      "90 MIN": "Enquire",
      "120 MIN": "Enquire",
    },
    featured: false,
  },
  {
    slug: "four-hand-massage",
    name: "Four Hand Massage",
    category: "Specialty & Suites",
    tagline: "A coordinated treatment enquiry.",
    shortDescription:
      "A massage format involving two practitioners. Availability depends on staffing, so confirm the session format and timing directly before travelling.",
    fullDescription: [
      "A massage format involving two practitioners. Availability depends on staffing, so confirm the session format and timing directly before travelling.",
      "Ask how the practitioners coordinate and agree on comfortable pressure.",
    ],
    expectations: [
      "Ask how the practitioners coordinate and agree on comfortable pressure.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "A coordinated treatment enquiry.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before four hand massage?",
        answer:
          "Ask how the practitioners coordinate and agree on comfortable pressure.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-multi-hand.webp",
    imageAlt: "Illustrative four hand massage wellness imagery",
    numericPrice: 12000,
    price: "৳12,000",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳12,000",
      "90 MIN": "Enquire",
      "120 MIN": "Enquire",
    },
    featured: false,
  },
  {
    slug: "six-hand-massage",
    name: "Six Hand Massage",
    category: "Specialty & Suites",
    tagline: "A multi-practitioner appointment.",
    shortDescription:
      "A specialist format involving three practitioners. Enquire in advance about availability, the treatment plan and the total session price.",
    fullDescription: [
      "A specialist format involving three practitioners. Enquire in advance about availability, the treatment plan and the total session price.",
      "Allow the team to confirm all practitioners before considering the appointment reserved.",
    ],
    expectations: [
      "Allow the team to confirm all practitioners before considering the appointment reserved.",
      "Agree on the treatment areas and duration before the session.",
      "Let the team know if you would like any adjustment or a pause.",
    ],
    suitableFor: [
      "A multi-practitioner appointment.",
      "Guests who want to discuss personal preferences before booking.",
    ],
    highlights: ["Time for relaxation", "A session shaped by your preferences"],
    faqs: [
      {
        question: "What should I discuss before six hand massage?",
        answer:
          "Allow the team to confirm all practitioners before considering the appointment reserved.",
      },
      {
        question: "How do I reserve this treatment?",
        answer:
          "Message Dhaka Spa Centre on WhatsApp with the treatment, preferred date and duration. Your appointment is confirmed only when the team replies.",
      },
    ],
    image: "/images/dhaka-spa-multi-hand.webp",
    imageAlt: "Illustrative six hand massage wellness imagery",
    numericPrice: 16500,
    price: "৳16,500",
    currency: "BDT",
    duration: "60 minutes",
    durationPricing: {
      "60 MIN": "৳16,500",
      "90 MIN": "Enquire",
      "120 MIN": "Enquire",
    },
    featured: false,
  },
];
export type Service = (typeof SERVICES)[number];
export const getServiceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
export const getRelatedServices = (slug: string, count = 3) =>
  SERVICES.filter((s) => s.slug !== slug).slice(0, count);
