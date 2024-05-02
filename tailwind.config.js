/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/cucumber.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    colors:{
      'gray': '#999999',
      'lightgreen': '#00B207',
      'graywhite': '#E6E6E6',
      'hovergreen':'#2C742F'
    },
  },
  plugins: [],
}