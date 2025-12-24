// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#10b981",
        accent: "#fbbf24",
      },
    },
  },
    plugins: [require('@tailwindcss/typography')],
}