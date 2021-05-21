import { Dimensions } from "react-native";

const SPACING_FACTOR = 8;

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height,
  },
  spacing: (t: number) => SPACING_FACTOR * t,
  isSmallDevice: width < 375,
};
