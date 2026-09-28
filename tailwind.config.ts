import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        luxury: {
          dark: "#0B0C0E",
          surface: "#131518",
          card: "#181B1F",
          border: "#262A30",
          gold: "#C5A059",
          "gold-light": "#DFC286",
          "gold-dark": "#9E7B3B",
          cream: "#FAF7F2",
          "cream-soft": "#F3EFE6",
          muted: "#949086",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.2)',
        'gold-glow-lg': '0 0 40px rgba(197, 160, 89, 0.35)',
      },
    },
  },
  plugins: [],
};
export default config;
