/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'yellow': '#fad946',
      'grey': '#adb5c4',
      'even-less-dark': '#181f2b',
      'less-dark': '#121822',
      'dark': '#090c13',
    },
  },
  plugins: [],
}
