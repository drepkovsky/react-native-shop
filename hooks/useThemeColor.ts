import { Colors } from "react-native/Libraries/NewAppScreen";
import useColorScheme from "./useColorScheme";

// get theme color from Colors based on theme preference, values are over-ridable
export default function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
