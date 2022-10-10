/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        'sans': ['Overpass'],
        'serif': ['Monbaiti'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}