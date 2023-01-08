/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      my_bg_image: "url('../public/assets/Hospital.png')",
    },
  },
  plugins: [],
};
