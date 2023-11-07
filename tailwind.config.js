const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'semiwhite': "#FFFFFF26",
      },
      boxShadow: ({ theme }) => ({
        button: `0 6px 0 0 ${theme('colors.indigo.950')}`,
        container: `inset 0px 2px 0px 0px ${theme('colors.semiwhite')}, 0px 3px 0px 0px ${theme('colors.semiwhite')}`
      }),
    },
  },
  plugins: [],
}

