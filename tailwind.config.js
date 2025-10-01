/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "lg-xl": "1140px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1720px",
    },

    extend: {
      colors: {
        background: "#DEEEF7",
        primary: "#55887c",
        secondary: "#efece9",
        third: "#4C4C4C",
      },
      fontFamily: {
        sans: ['"Kumbh Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        kumbh: ['"Kumbh Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
