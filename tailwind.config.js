/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.liquid",
    "./**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        avantgarde: ['"ITC Avant Garde Gothic Pro"', 'sans-serif'],
        avenir: ['Avenir', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
