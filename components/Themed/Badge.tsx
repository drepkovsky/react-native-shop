import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Styles from "../../constants/Styles";
import useThemeColor from "../../hooks/useThemeColor";
import { Container } from "./Container";
import { Text } from "./Text";
import { ViewProps } from "./View";

export type BadgeProps = ViewProps & {
  count: number;
  color?: keyof typeof Colors.light & keyof typeof Colors.dark;
  bg?: keyof typeof Colors.light & keyof typeof Colors.dark;
  size: number;
};

const Badge = ({ children, bg, color, count, size }: BadgeProps) => {
  const backgroundColor = useThemeColor({}, bg || "brand");

  return (
    <Container style={{ position: "relative" }}>
      {Boolean(count) && (
        <Container
          style={{
            position: "absolute",
            backgroundColor,
            zIndex: 1000,
            width: size,
            height: size,
            borderRadius: size * 0.5,
            right: -size * 0.45,
            top: -size * 0.45,
          }}>
          <Text
            color={color || "white"}
            style={{
              width: "100%",
              textAlign: "center",
              textAlignVertical: "center",
              fontSize: size * 0.5,
              fontWeight: "bold",
              lineHeight: size,
              height: "100%",
            }}>
            {count}
          </Text>
        </Container>
      )}
      {children}
    </Container>
  );
};

export default Badge;
