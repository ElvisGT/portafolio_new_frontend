/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      'Itim':['Itim']
    },
    colors:{
      ...colors,
      'main':'#415a77',
      'alert':'#c1121f'
    }
  },
  plugins: [
  ],
}
