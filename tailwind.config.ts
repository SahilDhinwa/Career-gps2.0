/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // THIS IS THE MAGIC KEY
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)", 
        primary: "var(--primary)", 
        primaryHover: "var(--primaryHover)", 
        success: "var(--success)", 
        warning: "var(--warning)", 
        surface: "var(--surface)", 
        surfaceBorder: "var(--surfaceBorder)", 
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
