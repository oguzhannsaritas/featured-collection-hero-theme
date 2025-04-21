/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.liquid",
    "./**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        avant: ['AvantGarde', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
