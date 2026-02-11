/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2933",   // charcoal
        muted: "#6b7280",     // soft gray
        accent: "#6b8f71",    // sage green
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

