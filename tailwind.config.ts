import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      colors: {
        background: "var(--primary)",
        foreground: "var(--foreground)",
        primary: "#004D61",
        secondary: "#47A138",
        negative: "#FF5031",
        gradientStart: "#004D61",
        gradientEnd: "#FFFFFF",
        grey: "#DEE9EA",
        white: "#F8F8F8",
      },
      fontSize: {
        big: "25px",
        medium: "20px",
        small: "16px",
        extra_small: "13px",
      },
      spacing: {
        small: "8px",
        medium: "16px",
        big: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
