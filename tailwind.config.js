/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        trip: {
          green: '#00AA6C',
          'green-dark': '#008756',
          'green-light': '#E8F8F1',
          bg: '#FAF1ED',
          dark: '#191E23',
          muted: '#545454',
          border: '#E6DED7'
        }
      }
    },
  },
  plugins: [],
}
