/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        boldonse: ['Boldonse', 'sans-serif'],
        ter: ['D-DIN Condensed', 'sans-serif'],
        primary: ['Mark Pro', 'sans-serif'],
        secondary: ['Circular Std Book', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
