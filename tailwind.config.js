/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: { 400: "#ff6257" },
        secondary: {
          100: "#ffffff",
          300: "#9294a0",
          600: "#36384e",
          800: "#242742",
        },
      },
    },
  },
  plugins: [],
};

