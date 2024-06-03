/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#4AA8FF',
          black: '#232323',
        },
      },
      fontFamily: {
        pregular: ['Poppins-Regular', 'sans-serif'],
        pmedium: ['Poppins-Medium', 'sans-serif'],
        pbold: ['Poppins-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
