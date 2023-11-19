import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-page": "url('/background.webp')",
        "wykonawstwo-page": "url('/wykonawstwo-background.png')",
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
      },
      animation: {
        appear: "appear 0.3s ease-in-out forwards",
        category: "category 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
