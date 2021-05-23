import { TextStyle } from "react-native";

const Typography: { [key: string]: TextStyle } = {
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  default: {
    fontSize: 12,
    fontWeight: "normal",
  },
  body1: {
    fontSize: 16,
    fontWeight: "normal",
  },
  body2: {
    fontSize: 18,
    fontWeight: "normal",
  },
};

export default Typography;
