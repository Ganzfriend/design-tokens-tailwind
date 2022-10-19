const plugin = require("tailwindcss/plugin");

const colors = require("./tailwind/colors");
const boxShadow = require("./tailwind/shadows");
const typography = require("./tailwind/typography");
const misc = require("./tailwind/misc");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors,
      boxShadow,
      ...misc,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, addComponents }) {
      addComponents({
        ...typography,
      });
    }),
  ],
};
