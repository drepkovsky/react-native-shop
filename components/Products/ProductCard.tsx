// react
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";
import { Product } from "../../types";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from "../Card/Card";
import { Container, Text } from "../Themed";
import useThemeColor from "./../../hooks/useThemeColor";

export type ProductItemProps = {
  product: Product;
};

// TODO documentation

const ProductCard = ({ product }: ProductItemProps) => {
  console.log(product.image);

  const brandColor = useThemeColor(
    { light: undefined, dark: undefined },
    "brand"
  );

  const onAddToCard = () => {
    console.log("click");
  };

  return (
    <Container style={[styles.root]}>
      <Card>
        <CardImage style={styles.cardImage} source={{ uri: product.image }} />
        <CardHeader>
          <Text variant="default">{product.title}</Text>
        </CardHeader>
        <CardContent style={styles.content}>
          <Container style={{ flex: 1 }}>
            <Text variant="title">{`${product.price} $`}</Text>
          </Container>
          <Container
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}>
            <Ionicons
              onPress={onAddToCard}
              name="ios-cart"
              size={25}
              style={{ color: brandColor }}
            />
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: Layout.spacing(0.5),
  },
  cardImage: {
    minHeight: 150,
    resizeMode: "contain",
    marginBottom: Layout.spacing(2),
  },
  content: { flexDirection: "row", flex: 1 },
});

export default ProductCard;
