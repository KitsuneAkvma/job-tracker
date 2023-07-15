/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "##242424",
        text: "rgba(255, 255, 255, 0.87)",
      },
      fontFamily: {},
      container: { padding: "2rem", center: true },
      breakpoints: { sm: "420px", md: "768px" },
    },
  },
  plugins: [],
};
