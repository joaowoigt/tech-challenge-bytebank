import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./patterns/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./UI/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "360px" },
    },
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      colors: {
        background: "var(--primary)",
        foreground: "var(--foreground)",
        primary: "#004D61",
        secondary: "#47A138",
        secondaryVariant: "#E4EDE3",
        negative: "#FF5031",
        gradientStart: "#004D61",
        gradientEnd: "#FFFFFF",
        grey: "#DEE9EA",
        white: "#F8F8F8",
        darkGray: "#8B8B8B",
        grayVariant: "#CBCBCB",
      },
      fontSize: {
        big: "25px",
        medium: "20px",
        small: "16px",
        extra_small: "13px",
      },
      spacing: {
        extraBig: "32px",
        small: "8px",
        medium: "16px",
        big: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
