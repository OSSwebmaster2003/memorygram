/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#1E2538",
        mainColor: "#191E2E",
        buttonColor: "#3657CB",
        textColor: "#FFF",
        textGrey: "#323A55",
        textYellow: "#F2F60F",
        textGreen: "#57D043",
        placeholderColor: "rgba(255, 255, 255, 0.60)",
      },
    },
  },
  plugins: [],
};
