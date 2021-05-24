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
      shadowOpacity: 0.1,
      shadowRadius: 2.22,
      elevation: 2,
    },
    2: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.12,
      shadowRadius: 4.65,
      elevation: 4,
    },
    3: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4.65,
      elevation: 6,
    },
  },
  radius: {
    borderRadius: 10,
  },
};

export default Styles;
