/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mytheme-dark-green': '#14350a',
        'mytheme-dark-brown': '#472c23',
        'mytheme-lighter-green': '#1d5c0f',
        'mytheme-lighter-brown': '#a1755c',
        'mytheme-brown-red': '#933b17',
      },
    },
  },
  plugins: [],
}