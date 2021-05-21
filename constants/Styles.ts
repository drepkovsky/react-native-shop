import { ImageStyle, ViewStyle } from "react-native";

export interface StylesProps {
  shadows: { [key: number]: ImageStyle & ViewStyle };
  radius: ImageStyle;
}

const Styles: StylesProps = {
  shadows: {
    1: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.9,
      elevation: 1,
    },
    2: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    3: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
    },
  },
  radius: {
    borderRadius: 10,
  },
};

export default Styles;
