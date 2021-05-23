// react
import { Ionicons } from "@expo/vector-icons";
import React, { Fragment } from "react";
import { Pressable, StyleSheet, TouchableNativeFeedback } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Layout from "../../constants/Layout";
import Styles from "../../constants/Styles";
import { Product, ProductCallback } from "../../types";
import { strTrim } from "../../utils/utils";

import { Card, CardContent, CardHeader, CardImage } from "../Card/Card";
import { Container, Paper, Text } from "../Themed";
import useThemeColor from "./../../hooks/useThemeColor";

export type ProductItemProps = {
  product: Product;
  onProductClick: ProductCallback;
};

// TODO documentation

const ProductCard = ({ product, onProductClick }: ProductItemProps) => {
  const brandColor = useThemeColor(
    { light: undefined, dark: undefined },
    "brand"
  );

  const onAddToCard = () => {
    console.log("add to cart");
  };

  const onCardClick = () => {
    onProductClick(product.id);
  };

  return (
    <Container style={[styles.root]} key={product.id}>
      <Pressable onPress={onCardClick}>
        <Card>
          <CardImage style={styles.cardImage} source={{ uri: product.image }} />
          <CardHeader>
            <Text variant="default">{strTrim(product.title, 50)}</Text>
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
              }}
            >
              <Pressable onPress={onAddToCard}>
                <Ionicons
                  name="ios-cart"
                  size={25}
                  style={{ color: brandColor }}
                />
              </Pressable>
            </Container>
          </CardContent>
        </Card>
      </Pressable>
    </Container>
  );
};

const styles = StyleSheet.create({
  root: {
    ...Styles.radius,
    padding: Layout.spacing(0.5),
    width: "100%",
  },
  cardImage: {
    minHeight: 150,
    width: "100%",
    resizeMode: "contain",
    marginBottom: Layout.spacing(2),
  },
  content: { flexDirection: "row" },
});

export default ProductCard;
