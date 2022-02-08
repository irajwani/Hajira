module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: '960px',
        desktop: '1248px'
      },
      fontFamily: {
        montserrat: 'Quicksand'
      },
      colors: {
        maroon: '#7d0e2d',
        gold: '#f5dd05',
        white: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
