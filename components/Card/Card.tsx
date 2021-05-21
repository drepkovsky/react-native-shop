// react
import React from "react";
import { StyleSheet, ImageProps, Image } from "react-native";

import { PaperProps, Paper, Container, ContainerProps } from "../Themed";
import Styles from "../../constants/Styles";
import Layout from "../../constants/Layout";

export const Card = ({ children, ...props }: PaperProps) => {
  return (
    <Paper style={[styles.root, Styles.radius, Styles.shadows[3]]} {...props}>
      {children}
    </Paper>
  );
};

export const CardContent = ({ children, ...props }: ContainerProps) => {
  return (
    <Container style={styles.content} {...props}>
      {children}
    </Container>
  );
};

export const CardHeader = ({ children, ...props }: ContainerProps) => {
  return (
    <Container style={styles.header} {...props}>
      {children}
    </Container>
  );
};

export const CardFooter = ({ children, ...props }: ContainerProps) => {
  return (
    <Container style={styles.footer} {...props}>
      {children}
    </Container>
  );
};

export const CardImage = (props: ImageProps) => {
  return <Image style={styles.image} {...props} />;
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    width: "100%",
    minHeight: 20,
    paddingHorizontal: Layout.spacing(2),
    paddingVertical: Layout.spacing(1),
  },
  footer: {
    width: "100%",
    minHeight: 20,
    paddingHorizontal: Layout.spacing(2),
  },
  content: {
    width: "100%",
    paddingHorizontal: Layout.spacing(2),
    paddingVertical: Layout.spacing(1),
  },
  image: {
    width: "100%",
  },
});
