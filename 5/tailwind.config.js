/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary: {
          jaune: "#FFBA38;",
          800: "#FF1313;",
        },
      },
      fontFamily: {
        fontin: ["fontin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
