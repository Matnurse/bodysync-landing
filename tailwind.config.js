/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { orbitron: ["Orbitron", "sans-serif"] },
      colors: { primary: "#1E3A8A", accent: "#10B981" }
    },
  },
  plugins: [],
};