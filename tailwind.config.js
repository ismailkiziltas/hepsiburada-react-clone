/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hepsi-orange': '#ff6000',
        'hepsi-dark': '#484848',
        'hepsi-gray': '#f8f9fa',
      },
    },
  },
  plugins: [],
}