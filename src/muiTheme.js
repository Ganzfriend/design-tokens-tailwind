import { createTheme } from "@mui/material/styles";
const colors = require("./mui/colors");
const shadows = require("./mui/shadows");
const typography = require("./mui/typography");
const misc = require("./mui/misc");

const theme = createTheme({
  palette: colors,
  typography: {
    // ...typography,
    h1: typography.headline.h1.regular,
    ...typography.body,
    ...typography.subtitle,
    ...typography.caption,
    ...typography.button,
    ...typography.overline,
    ...misc,
  },
  shadows,
});

export default theme;
