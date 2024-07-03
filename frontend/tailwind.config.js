/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        darkBlue: "#060F66",
        lightBlue:"#1424B2",
        red: "#FF0000",
        seaGreen: "#00D09C",
        lightGrey:"#D9D9D9",
        darkGrey:"#747474",
        dropdownHover: '#2B6CB0',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus'],
    },
  },
  plugins: [],
})

