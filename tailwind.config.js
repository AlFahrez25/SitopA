/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#A04747",
        second: "#D8A25E",
        third: "#161D6F",
        fourt: "#088395",
        back: "#071952",
        back2: "#F0F0F0",
        back3: "#91DDCF",
      },
      height: {
        128: "40rem",
      },
    },
  },
  plugins: [],
};
