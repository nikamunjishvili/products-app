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
      'gray':'#999999',
    },
  },
  plugins: [],
}