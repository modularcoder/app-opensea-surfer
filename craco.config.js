// A configuration to owerwrite Create-React-App default files
// Required for tailwindcss
// https://tailwindcss.com/docs/guides/create-react-app
// https://github.com/gsoft-inc/craco

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
}
