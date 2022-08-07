/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '10%': '10%',
        '40%': '40%',
      }
    },
    borderWidth: {
      DEFAULT: '1px',
    }
  },
  plugins: [],
}