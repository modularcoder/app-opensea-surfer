const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
      },
    },
    // colors: {
    //   // Build your palette here
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   gray: colors.trueGray,
    //   red: colors.red,
    //   blue: colors.lightBlue,
    //   yellow: colors.amber,
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
