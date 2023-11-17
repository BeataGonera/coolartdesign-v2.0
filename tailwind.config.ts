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
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "dark-primary": "#161616",
      },
      animation: {
        appear: "spin 3s linear",
      },
    },
  },
  plugins: [],
};
export default config;
