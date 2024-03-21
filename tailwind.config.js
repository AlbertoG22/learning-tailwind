/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#243cff',
        'dark-blue': '#0d1b3e'
      },
      spacing: {
        '42': '170px'
      }
    },
  },
  plugins: [],
}

