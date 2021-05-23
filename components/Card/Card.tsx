// react
import React from "react";
import { StyleSheet, ImageProps, Image } from "react-native";

import { PaperProps, Paper, Container, ContainerProps } from "../Themed";
import Styles from "../../constants/Styles";
import Layout from "../../constants/Layout";

export type CardSeparatorProp = {
  separator?: boolean;
};

export const Card = ({ style, children, ...props }: PaperProps) => {
  return (
    <Paper
      style={[styles.root, Styles.radius, Styles.shadows[2], style]}
      {...props}>
      {children}
    </Paper>
  );
};

export const CardContent = ({ style, children, ...props }: ContainerProps) => {
  return (
    <Container style={[styles.content, style]} {...props}>
      {children}
    </Container>
  );
};

export const CardHeader = ({
  style,
  children,
  separator,
  ...props
}: ContainerProps & CardSeparatorProp) => {
  const separatorProp = separator
    ? { borderBottomWidth: 1 }
    : { borderBottomWidth: 0 };
  return (
    <Container style={[separatorProp, styles.header, style]} {...props}>
      {children}
    </Container>
  );
};

export const CardFooter = ({
  style,
  children,
  separator,
  ...props
}: ContainerProps & CardSeparatorProp) => {
  const separatorProp = separator
    ? { borderTopWidth: 1 }
    : { borderTopWidth: 0 };

  return (
    <Container style={[separatorProp, styles.footer, style]} {...props}>
      {children}
    </Container>
  );
};

export const CardImage = ({ style, ...props }: ImageProps) => {
  return <Image style={[styles.image, style]} {...props} />;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    width: "100%",
    minHeight: 20,
    paddingHorizontal: Layout.spacing(1),
    paddingTop: Layout.spacing(1),
    paddingBottom: Layout.spacing(0.2),
  },
  footer: {
    width: "100%",
    minHeight: 20,
    paddingHorizontal: Layout.spacing(1),
    paddingBottom: Layout.spacing(1),
    paddingTop: Layout.spacing(0.2),
  },
  content: {
    width: "100%",
    minHeight: 50,
    paddingHorizontal: Layout.spacing(1),
    paddingVertical: Layout.spacing(1),
  },
  image: {
    width: "100%",
    minHeight: 50,
  },
});
