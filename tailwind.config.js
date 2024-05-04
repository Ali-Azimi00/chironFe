/*@type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  ],
  theme: {
    extend: {
      screens: { 'xsm': { 'max': '640px' }, 'xxsm':{'max':'400px'}} ,
      margin: {
        '5p': '5%',
      },
      height:{
        '30p': '30%'
      },
      colors: {
        primary: "#9333ea",
        secondary: "#242424",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle .2s ease-in-out infinite',
      }
    },    
  },
  plugins: [],
}

