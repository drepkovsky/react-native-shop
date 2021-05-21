import * as React from "react";

import { View } from "react-native";
import { ThemeProps } from "../../types";
import useThemeColor from "../../hooks/useThemeColor";

export type PaperProps = ThemeProps & View["props"];

export function Paper(props: PaperProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "paper"
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
