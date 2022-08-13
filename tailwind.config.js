/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  plugins: [
    require('tw-elements/dist/plugin')
  ],

  theme: {
    extend: {
      spacing: {
        '10%': '10%',
        '40%': '40%',
      },
      boxShadow: {
        'top': '0px 20 10px -15px red',
      }
    },
    borderWidth: {
      DEFAULT: '1px',
    }
  },
  plugins: [],
}