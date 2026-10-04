export const BUSINESS_INFO = {
  name: "Dhaka Spa Centre",
  tagline: "Thai massage & thoughtful wellness in Gulshan 2, Dhaka",
  address: {
    street: "House # 1/A, Road 90",
    neighborhood: "Gulshan 2",
    city: "Dhaka",
    postalCode: "1212",
    country: "Bangladesh",
    formatted: "House # 1/A, Road 90, Gulshan 2, Dhaka 1212, Bangladesh",
  },
  contact: {
    phone: "+8801609875990",
    phoneFormatted: "+8801609875990",
    telLink: "tel:+8801609875990",
    whatsappNumber: "8801609875990",
    whatsappLink: "https://wa.me/8801609875990",
    getWhatsAppBookingLink: (serviceName?: string) =>
      "https://wa.me/8801609875990?text=" +
      encodeURIComponent(
        "Hello Dhaka Spa Centre, I would like to enquire about " +
          (serviceName || "a spa appointment") +
          ". Please confirm availability and the final price.",
      ),
  },
  telegramUrl: "https://t.me/dhakaspacenter",
  openingHours: {
    display: "Saturday–Thursday: 10 AM–10 PM; Friday: 2 PM–10 PM (Asia/Dhaka).",
    schedule: [
      { dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "10:00", closes: "22:00" },
      { dayOfWeek: ["Friday"], opens: "14:00", closes: "22:00" },
    ],
    source: "https://share.google/LzwDmmK6zuq0frEmI",
  },
  geo: null,
  serviceAreas: ["Gulshan", "Banani", "Baridhara", "Dhaka"],
  googleBusinessProfileUrl: "https://share.google/LzwDmmK6zuq0frEmI",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6397519480865!2d90.41510484232786!3d23.79583943131331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7aab5c0c093%3A0x88d7f05fc20c2762!2sDhaka%20Spa%20Centre!5e0!3m2!1sen!2sbd!4v1791045936825!5m2!1sen!2sbd",
  mapLink:
    process.env.NEXT_PUBLIC_MAP_URL ||
    "https://share.google/LzwDmmK6zuq0frEmI",
  websiteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NETLIFY === "true" ? process.env.URL : undefined) ||
    "http://localhost:3000"
  ).replace(/\/$/, ""),
};
