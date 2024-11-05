/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
      },
      colors: {
        karcis: {
          blue: '#4E4CEF',
          lightblue: '#DADAFC',
          black: '#1B1B25',
          lightgray: '#DDDDDF'
        }
      },
    },
  },
  plugins: [],
}

