const defaultTheme = require('tailwindcss/defaultTheme')




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
fontFamily:{
"manrope":["Manrope", ...defaultTheme.fontFamily.sans]

},
colors:{
  transparent: 'transparent',
  current: 'currentColor',
  "Primary-color":"red",
 "Gray-color-1": "#808080",
 "Yellow-color1":"#FFFF00"
},

    },
  },
  plugins: [],
}

