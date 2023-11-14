import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      main: ['Inter Tight', 'sans-serif'],
    },
    extend: {
      colors: {
        'semiwhite': "#FFFFFF26",
      },
      boxShadow: ({ theme }) => ({
        button: `0 6px 0 0 ${theme('colors.indigo.950')}`,
        container: `inset 0px 2px 0px 0px ${theme('colors.semiwhite')}, 0px 3px 0px 0px ${theme('colors.semiwhite')}`
      }),
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 0 var(--tw-shadow-color), -2px 0 var(--tw-shadow-color), 0 2px var(--tw-shadow-color), 0 -2px var(--tw-shadow-color), 1px 1px var(--tw-shadow-color), -1px -1px var(--tw-shadow-color), 1px -1px var(--tw-shadow-color), -1px 1px var(--tw-shadow-color);',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      backgroundImage: {
        pattern: 'url("/bkg_pattern.svg"), linear-gradient(200deg, #5c1ea6, #c8435e)',
      },
      keyframes: {
        bounceltl: {
          '0%, 10%': { transform: 'translateY(0%)'},
          '5%': { transform: 'translateY(8%)'},
          '11%, 100%': { transform: 'translateY(0%)'},
        },
        scaleup: {
          '0%, 10%': { transform: 'scale(1)'},
          '5%': { transform: 'scale(1.2)'},
          '11%, 100%': { transform: 'scale(1)'},
        }
      },
      animation: {
        'bounce-litle': 'bounceltl 5s cubic-bezier(0.8, 0, 1,1) infinite',
        'scale-up': 'scaleup 5s cubic-bezier(0.8, 0, 1,1) infinite',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

