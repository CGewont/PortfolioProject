/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Urple family (accessible on dark)
        urple: {
          50:  "#F3ECFA",
          100: "#E7D9F5",
          200: "#D3B8EE",
          300: "#BE96E8",
          400: "#AA78E1",
          500: "#B57EDC",   // the “Urple” you asked for (lavender)
          600: "#8E5CCF",
          700: "#6F46B7",
          800: "#573895",
          900: "#422C73",
          950:"#2C1D4B",
        },
        ink:  "#0b0b10",   // background
        coal: "#14141c",   // cards/sections
        slatey:"#9aa0b4"   // muted text
      },
      boxShadow: {
        urple: "0 10px 30px -12px rgba(181,126,220,0.35)"
      }
    },
  },
  plugins: [],
}
