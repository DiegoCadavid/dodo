import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d2ebfc",
          200: "#a5d7f9",
          300: "#77c3f6",
          400: "#4aaff3",
          500: "#1d9bf0",
          600: "#177cc0",
          700: "#115d90",
          800: "#0c3e60",
          900: "#061f30",
        },
        background: {
          300: "#4E4F50",
          400: "#3A3B3C",
          500: "#242526",
          600: "#18191A",
        },
      },
      height: {
        bannerProfile: "300px",
      },
      spacing: {
        "18": "4.5rem",
        "19": "4.75rem",
        "30": "7.65rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
