import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      main: ['sans-serif'],
    },
    extend: {
      colors: {
        'semiwhite': "#FFFFFF26",
      },
      boxShadow: ({ theme }) => ({
        button: `0 6px 0 0 ${theme('colors.indigo.950')}`,
        container: `inset 0px 2px 0px 0px ${theme('colors.semiwhite')}, 0px 3px 0px 0px ${theme('colors.semiwhite')}`
      }),
      backgroundImage: {
        pattern: 'url("/bkg_pattern.svg"), linear-gradient(200deg, #5c1ea6, #c8435e)',
      },
      keyframes: {
        bounceltl: {
          '0%, 100%': { transform: 'translateY(-1%)'},
          '50%': { transform: 'translateY(5%)'},
        },
      },
      animation: {
        'bounce-litle': 'bounceltl .8s cubic-bezier(0.8, 0, 1,1) infinite',
      }
    },
  },
  plugins: [],
}

