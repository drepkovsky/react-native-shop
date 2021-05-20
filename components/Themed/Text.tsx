// react
import * as React from "react";

import { Text as DefaultText } from "react-native";
import useThemeColor from "../../hooks/useThemeColor";
import { ThemeProps } from "../../types";
import Typography from "../../constants/Typography";

export type TextProps = ThemeProps &
  DefaultText["props"] & { variant?: keyof typeof Typography };

export function Text(props: TextProps) {
  const {
    style,
    lightColor,
    darkColor,
    variant = "default",
    ...otherProps
  } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const typography = Typography[variant];

  return <DefaultText style={[{ color }, typography, style]} {...otherProps} />;
}
