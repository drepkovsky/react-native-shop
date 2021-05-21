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

const BRAND = "#00AB55";

const PALLETE = {
  brand: BRAND,
  transparent: "transparent",
};

export default {
  light: {
    text: GREY[900],
    tint: GREY[400],
    background: GREY[100],
    paper: "#ffffff",
    ...PALLETE,
  },
  dark: {
    text: GREY[100],
    tint: GREY[600],
    background: GREY[900],
    paper: GREY[800],
    ...PALLETE,
  },
};
