import { createTheme } from "@mui/material/styles";
const colors = require("./tailwind/colors");
const shadows = require("./tailwind/shadows");
const typography = require("./tailwind/typography");
const misc = require("./tailwind/misc");

const theme = createTheme({
  palette: ...colors,
  typography: {
    ...typography,
    ...typography.headline,
    ...typography.body,
    ...typography.subtitle,
    ...typography.caption,
    ...typography.button,
    ...typography.overline,
    ...misc
  },
  shadows,
});
