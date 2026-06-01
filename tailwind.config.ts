/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBFBF9", // A rich, very subtle warm off-white (Royal Cream)
        foreground: "#0B1410", // Near-black forest green for highly readable text
        primary: "#114232", // Deep Royal Dark Green (Hero color for buttons/borders)
        primaryHover: "#0A291F", // Darker shade for hover effects
        success: "#2A9D8F", // Sea Green (Used for completion checkmarks and progress bars)
        warning: "#D4AF37", // Muted Royal Gold (Replaces the harsh yellow for warnings/deadlines)
        surface: "#FFFFFF", // Pure white for cards
        surfaceBorder: "#E2E6E3", // Soft green-tinted grey for borders
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
