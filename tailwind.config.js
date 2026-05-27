/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "grey-dark": "#222222",
        "grey-mid": "#666666",
        "grey-light": "#D0D0D0",
        "grey-pale": "#F5F5F5",
        "black-hero": "#050505",
      },
      fontFamily: {
        headline: ["Montserrat", "sans-serif"],
        display: ["Archivo", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1400px",
      },
      spacing: {
        section: "140px",
        "section-mobile": "80px",
        content: "64px",
        element: "32px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
