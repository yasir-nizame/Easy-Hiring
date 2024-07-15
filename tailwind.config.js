/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basic:"#CAF0F8",
        primary: "#90E0EF", 
        primary1: "#00B4D8", 
        secondary: "#0077B6", 
        secondary1: "#03045E",
      }
    },
  },
  plugins: [],
};
