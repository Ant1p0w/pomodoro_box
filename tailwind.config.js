module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        red: {
          500: '#DC3E22'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
