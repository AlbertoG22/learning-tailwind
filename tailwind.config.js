/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#243cff',
        'dark-blue': '#0d1b3e'
      },
      spacing: {
        '42': '170px'
      },
      screens: {
        'tablet': '900px',
      }
    },
  },
  plugins: [],
}

