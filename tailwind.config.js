/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1E",      // Rich Charcoal
        accent: "#D4AF37",       // Royal Gold
        secondary: "#F4F4F5",    // Soft Neutral
        textMain: "#EDEDED",     // Off White
        hoverAccent: "#B38B2E",  // Gold Hover
      },
    },
  },
  plugins: [],
}
