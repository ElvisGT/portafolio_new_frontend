/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors:{
      ...colors,
      'main':'#7A4811'
    }
  },
  plugins: [
  ],
}
