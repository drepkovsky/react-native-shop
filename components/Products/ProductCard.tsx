// react
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Layout from "../../constants/Layout";
import Styles from "../../constants/Styles";
import { Product, ProductCallback } from "../../types";
import { formatPrice, strTrim } from "../../utils/utils";

import { Card, CardContent, CardHeader, CardImage } from "../Card/Card";
import { Container, Paper, Text } from "../Themed";
import useThemeColor from "./../../hooks/useThemeColor";
import { useAppDispatch } from "./../../hooks/useRedux";
import { addProductToCart } from "./../../redux/actions/act_carts";
import { useSnackbar } from "../../hooks/useSnackbar";

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

  // redux
  const dispatch = useAppDispatch();

  // snackbar
  const showSnackbar = useSnackbar();

  const onAddToCard = () => {
    dispatch(addProductToCart(product.id));
    if (showSnackbar) showSnackbar({ message: "Added to cart", duration: 500 });
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
              <Text variant="title">{formatPrice(product.price)}</Text>
            </Container>
            <Container
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}>
              <Pressable
                onPress={onAddToCard}
                hitSlop={30}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.5 : 1,
                  },
                ]}>
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
    backgroundColor: "#fff",
  },
  content: { flexDirection: "row" },
});

export default ProductCard;
