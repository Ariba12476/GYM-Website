/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:'green',
      },
      fontFamily:{
       logo:['Kanit','sans-serif'],
      },
    },
  },
  plugins: [],
}

