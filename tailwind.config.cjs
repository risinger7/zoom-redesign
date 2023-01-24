/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        "open-sans": ["Open sans"],
        handwriting: ["Pacifico"]
      },
      colors: {
        "zoom-blue": "#0b5cff",
      },
      height: {
        '140': '40rem',
      }
    },
  },
  plugins: [],
}
