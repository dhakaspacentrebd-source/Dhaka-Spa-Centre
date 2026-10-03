import { SERVICES } from "./services";

// These six 60-minute prices were explicitly supplied by the owner.
// Other existing menu figures remain initial guides, not verified offers.
export const VERIFIED_PRICE_SLUGS = [
  "dry-massage", "oil-massage", "hot-oil-massage", "couple-massage",
  "four-hand-massage", "six-hand-massage",
];
export const VERIFIED_PRICES = SERVICES.filter(s => VERIFIED_PRICE_SLUGS.includes(s.slug));
