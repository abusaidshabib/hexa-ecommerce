/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        light1: "#DFDEE0",
      },
    },
  },
  plugins: [],
};
