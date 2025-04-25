// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1880px",
    },
    extend: {
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        young: ["Young Serif", "serif"],
      },
      colors: {
        dark1: "#212121",
        dark2: "#130F32",
        dark3: "#2A323D",
        light1: "#DFDEE0",
        light2: "#999999",
        light3: "#F4F6FA",
      },
    },
  },
  plugins: [heroui()],
};
