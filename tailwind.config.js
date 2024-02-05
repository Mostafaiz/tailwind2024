/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '5rem',
      },
      width:{
        '22' : '5rem',
      },
    },
  },
  plugins: [],
}