/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        cedarville: ["Cedarville Cursive", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
