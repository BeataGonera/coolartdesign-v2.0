import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "landing-page": "15fr 47fr 18fr 20fr",
      },
      backgroundImage: {
        "landing-page": "url('/background.webp')",
        "wykonawstwo-page": "url('/wykonawstwo-background.webp')",
        "contact-page": "url('/contact-background.webp')",
        "contact-page-mobile": "url('/contact-bg-mobile.webp')",
        "doradztwo-page": "url('/doradztwo-bg.webp')",
        "doradztwo-page-mobile": "url('/doradztwo-bg-mobile.webp)",
        "nadzor-page": "url('/nadzor-bg.webp')",
      },
      listStyleType: {
        square: "square",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "dark-primary": "#161616",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.8" },
        },
        category: {
          "0%": { opacity: "0.75" },
          "100%": { opacity: "0.85" },
        },
        disappear: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        appear: "appear 0.3s ease-in-out forwards",
        category: "category 0.3s ease-in-out forwards",
        disappear: "disappear 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
