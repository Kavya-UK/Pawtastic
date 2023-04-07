// /** @type {import('tailwindcss').Config} */
const gray_blue = "#545871";
const grayish_blue = "#9597A6";
const pinkish_beige = "#EBD0CE";
const shaded_pink = "#F7ECEB";
const blue_grey_color="#F0F1F7";

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
        Pet_content: gray_blue,
        Pet_type: grayish_blue,
        border_greyish: grayish_blue,
        Favourite_greyish: grayish_blue,
        shaded_pink: shaded_pink,
        blue_grey_color: blue_grey_color,
        pinkish_beige: pinkish_beige,
      },
      fontSize: {
        xs: "8px",
        sm: "10px",
        base: "12px",
        xl: "16px",
        "2xl": "18px",
        "3xl": "20px",
        "4xl": "24px",
        "5xl": "28px",
        "6xl": "36px",
      },
      lineHeight: {
        28: "28px",
        40: "40px",
        26: "26px",
      },
      fontFamily: {
        "basic-sans": ["basic sans"],
        henriette: ["henriette"],
      },
    },
  },
  plugins: [],
};
