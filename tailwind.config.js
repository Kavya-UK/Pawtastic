// /** @type {import('tailwindcss').Config} */
const gray_blue = "#545871";
const grayish_blue = "#9597A6";
const pinkish_beige = "#EBD0CE";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        sidebar: gray_blue,
      },
      colors: {
        sidebar_title: grayish_blue,
        sidebar_subTitleHover: pinkish_beige,
        button_color: gray_blue,
      },
    },
  },
  plugins: [],
};
