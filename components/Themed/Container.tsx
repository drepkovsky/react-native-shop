import * as React from "react";

import { View as DefaultView } from "react-native";
import { ThemeProps } from "../../types";
import useThemeColor from "../../hooks/useThemeColor";

export type ContainerProps = ThemeProps & DefaultView["props"];

export function Container(props: ContainerProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "transparent"
  );

  return (
    <DefaultView
      style={[{ backgroundColor }, { overflow: "visible" }, style]}
      {...otherProps}
    />
  );
}
