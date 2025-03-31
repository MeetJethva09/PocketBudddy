/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '/index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'min-610' : '610px',
        'max-400' : '400px',
        "min-340" : "340px",
      }
    },
  },
  plugins: [],
}

