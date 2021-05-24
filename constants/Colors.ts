import { prefixObjProperties } from "../utils/utils";

const GREY = {
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#919EAB",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const BRAND = "#07b883";

const PALETTE = {
  brand: BRAND,
  white: "#fff",
  black: "#000",
  transparent: "transparent",
  ...prefixObjProperties(GREY, "grey."),
};

export default {
  light: {
    text: GREY[900],
    divider: GREY[300],
    disabled: GREY[500],
    background: GREY[100],
    paper: "#ffffff",
    ...PALETTE,
  },
  dark: {
    text: GREY[100],
    divider: GREY[700],
    disabled: GREY[400],
    background: GREY[900],
    paper: GREY[800],
    ...PALETTE,
  },
};
