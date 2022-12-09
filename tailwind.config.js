/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'opacity': 'opacity-animate 1s ease-in-out',
        'opacity-top': 'opacity-top-animate 1s ease-in-out',
        'opacity-left-right': 'opacity-left-right-animate 2s ease-in-out',
      },
      keyframes: {
        'opacity-animate': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'opacity-top-animate': {
          '0%': { 
            opacity: 0, 
            transform: 'translate(0, 100%)'
          },
          '100%': { 
            opacity: 1,
            transform: 'translate(0, 0)'
          },
        },
        'opacity-left-right-animate': {
          '0%': { 
            opacity: 0, 
            left: '20rem'
          },
          '100%': { 
            opacity: 1,
            left: '2.5rem'
          },
        }
      }
    },
  },
  plugins: [],
}
