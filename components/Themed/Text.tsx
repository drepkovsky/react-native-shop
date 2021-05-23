// react
import * as React from "react";

import { Text as DefaultText } from "react-native";
import useThemeColor from "../../hooks/useThemeColor";
import { ThemeProps } from "../../types";
import Typography from "../../constants/Typography";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

export type TextProps = ThemeProps &
  DefaultText["props"] & {
    variant?: keyof typeof Typography;
    hasGutterBottom?: boolean;
    color?: keyof typeof Colors.light & keyof typeof Colors.dark;
  };

export function Text(props: TextProps) {
  const {
    style,
    lightColor,
    darkColor,
    variant = "default",
    hasGutterBottom,
    color = "text",
    ...otherProps
  } = props;
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    color
  );
  const typography = Typography[variant];
  const marginBottom = hasGutterBottom ? Layout.spacing(1) : 0;

  return (
    <DefaultText
      style={[{ color: textColor, marginBottom }, typography, style]}
      {...otherProps}
    />
  );
}
