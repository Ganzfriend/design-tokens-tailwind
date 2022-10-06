const tokens = require("./tokens/tokens");
const { colors } = tokens || {};

const flattenObj = (key, obj) => {
  if (obj === undefined) return;

  const getEntries = () =>
    Object.fromEntries(Object.entries(obj)?.map(([k, v]) => flattenObj(k, v)));

  return typeof obj?.value === "string"
    ? [key, obj.value]
    : [key, getEntries()];
};

const formattedColors = Object.fromEntries(
  Object.entries(colors)?.map(([k, v]) => {
    const isStringOrNum = typeof v === "string" || typeof v === "number";
    return isStringOrNum ? [k, v] : flattenObj(k, v);
  })
);

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: formattedColors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
