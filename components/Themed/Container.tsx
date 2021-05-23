import * as React from "react";

import { View as DefaultView } from "react-native";
import useThemeColor from "../../hooks/useThemeColor";
import { ViewProps } from "./View";

export type ContainerProps = ViewProps;

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
