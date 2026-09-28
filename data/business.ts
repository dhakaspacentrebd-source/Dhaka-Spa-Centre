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
  openingHours: null,
  geo: null,
  mapLink:
    process.env.NEXT_PUBLIC_MAP_URL ||
    "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "House # 1/A, Road 90, Gulshan 2, Dhaka 1212, Bangladesh",
      ),
  websiteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NETLIFY === "true" ? process.env.URL : undefined) ||
    "http://localhost:3000"
  ).replace(/\/$/, ""),
};
