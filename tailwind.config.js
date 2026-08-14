/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0b6ef6',
          dark: '#084bb5'
        },
        charcoal: '#22262b'
      }
    }
  },
  plugins: []
}