/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandNavy: '#0f172a',   // Corporate Dark Navy
        brandBlue: '#2563eb',   // Royal Blue Accent
        brandLight: '#f8fafc',  // Soft Gray Background
      }
    },
  },
  plugins: [],
}