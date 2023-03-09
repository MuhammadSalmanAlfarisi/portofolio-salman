/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '920px',
      lg: '1200px',
      xl: '1600px',
    },
    extend: {},
  },
  plugins: [],
};
