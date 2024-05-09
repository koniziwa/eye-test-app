/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#4AA8FF",
          black: "#232323",
        },
        secondary: {
          grey: "#777777",
        },
        test: {
          100: "#FD9EFF",
          200: "#C3FF9E",
          300: "#FF9E9E",
          400: "#9EFFF9",
        }
      },
      fontFamily: {
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
      }
    },
  },
  plugins: [],
}

