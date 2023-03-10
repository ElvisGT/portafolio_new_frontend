/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation:{
          'oncePulse': 'pulse 1s ease-in-out 1',
      }
    },
    fontFamily:{
      'Itim':['Itim']
    },
    colors:{
      ...colors,
      'main':'#415a77',
      'alert':'#c1121f'
    },
    
  },
  plugins: [
  ],
}
