import { TextStyle } from "react-native";

const Typography: { [key: string]: TextStyle } = {
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

  body: {
    fontSize: 16,
    fontWeight: "normal",
  },
};

export default Typography;
