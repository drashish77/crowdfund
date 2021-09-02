module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '375px',
        xl: '1440px',
      },
      colors: {
        cyan: {
          moderate: 'hsl(176, 50%, 47%)',
          dark: 'hsl(176, 72%, 28%)',
        },
        grey: {
          custom: 'hsl(0, 0%, 48%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
