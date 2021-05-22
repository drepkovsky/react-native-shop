// react
import React from "react";
import { StyleSheet, ImageProps, Image } from "react-native";

import { PaperProps, Paper, Container, ContainerProps } from "../Themed";
import Styles from "../../constants/Styles";
import Layout from "../../constants/Layout";

export const Card = ({ style, children, ...props }: PaperProps) => {
  return (
    <Paper
      style={[styles.root, Styles.radius, Styles.shadows[3], style]}
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

export const CardHeader = ({ style, children, ...props }: ContainerProps) => {
  return (
    <Container style={[styles.header, style]} {...props}>
      {children}
    </Container>
  );
};

export const CardFooter = ({ style, children, ...props }: ContainerProps) => {
  return (
    <Container style={[styles.footer, style]} {...props}>
      {children}
    </Container>
  );
};

export const CardImage = ({ style, ...props }: ImageProps) => {
  return <Image style={[styles.image, style]} {...props} />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    width: "100%",
    minHeight: 20,
    paddingHorizontal: Layout.spacing(1),
  },
  footer: {
    width: "100%",
    minHeight: 20,
    paddingHorizontal: Layout.spacing(1),
  },
  content: {
    width: "100%",
    minHeight: 50,
    paddingHorizontal: Layout.spacing(1),
    paddingVertical: Layout.spacing(2),
  },
  image: {
    width: "100%",
    minHeight: 50,
  },
});
