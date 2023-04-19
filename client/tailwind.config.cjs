/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'open-sans-condensed': ['Open Sans Condensed', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      boxShadow: {
        cardhover: '0 0 1px 0 rgba(76, 205, 182, 0.2), 0 10px 20px -5px rgba(76, 205, 182, 0.2)',
        primaryButton: '0 0 1px 0 rgba(76, 205, 182, 0.3), 0 10px 16px -10px rgba(76, 205, 182, 0.3)',
      },
    },
  },
  plugins: [],
};

