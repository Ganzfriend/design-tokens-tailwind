const colors = require("./tailwind/colors");
const boxShadow = require("./tailwind/shadows");
const typography = require("./tailwind/typography");
const misc = require("./tailwind/misc");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...typography,
    ...typography.headline,
    extend: {
      colors,
      boxShadow,
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ...typography,
            ...typography.headline,
          },
        },
      }),
      ...misc,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
