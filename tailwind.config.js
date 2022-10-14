const colors = require("./tailwind/colors");
const boxShadow = require("./tailwind/shadows");
const typography = require("./tailwind/typography");
const misc = require("./tailwind/misc");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    typography: (theme) => ({
      DEFAULT: {
        css: {
          // ...typography,
          // ...typography.headline,
          h1: {
            ...typography.headline.h1.regular,
            "&.h1-italic": typography.headline.h1.italic,
            "&.h1-bold": typography.headline.h1.bold,
            // fontWeight: {
            //   regular: 400,
            //   italicized: 600,
            //   bolded: 700,
            // },
            // italic: typography.headline.h1.italic,
            // bold: typography.headline.h1.bold,
          },
        },
      },
      // h1: { css: { bold: typography.headline.h1.bold } },
      // italic: {
      //   css: {
      //     h1: typography.headline.h1.italic,
      //   },
      // },
    }),
    // bold: {
    //   h1: typography.headline.h1.bold,
    // },
    // ...typography,
    // ...typography.headline,
    // h1: typography.headline.h1.regular,
    extend: {
      colors,
      boxShadow,
      ...misc,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
