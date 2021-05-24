import React, { Children } from "react";
import { StyleSheet, PressableProps, Pressable, Platform } from "react-native";

import Colors from "../../constants/Colors";
import useThemeColor from "../../hooks/useThemeColor";
import { Container } from "./Container";
import { View, ViewProps } from "./View";

export type TypeButtonProps = ViewProps &
  PressableProps & {
    color?: keyof typeof Colors.light & keyof typeof Colors.dark;
    bg?: keyof typeof Colors.light & keyof typeof Colors.dark;
  };

const Button = ({
  style,
  color = "brand",
  children,
  disabled,
  ...props
}: TypeButtonProps) => {
  const backgroundColor = useThemeColor({}, color || "brand");

  return (
    <View style={[style]}>
      <Pressable
        disabled={disabled}
        style={({ pressed }) => [
          {
            opacity: disabled ? 0.7 : pressed ? 0.5 : 1,
          },
        ]}
        {...props}>
        <Container style={[styles.container, { backgroundColor }]}>
          {children}
        </Container>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
