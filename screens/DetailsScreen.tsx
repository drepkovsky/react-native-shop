import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { View, Container, Text } from "../components/Themed";
import { useAppSelector } from "../hooks/useRedux";
import useThemeColor from "../hooks/useThemeColor";
import {
  DetailsScreenNavigationProp,
  DetailsScreenRouteProp,
  Product,
} from "../types";

export type DetailsScreenProp = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

export default function DetailsScreen({
  navigation,
  route,
}: DetailsScreenProp) {
  // state
  const [product, setProduct] = useState<Product | null>(null);
  // params
  const { productId } = route.params;
  // redux
  const { products } = useAppSelector((state) => state.products);

  // color
  const brand = useThemeColor({}, "brand");

  // hooks
  useEffect(() => {
    if (products && productId) setProduct(products.get(productId) || null);
  }, [productId, products]);

  return (
    <View style={styles.container}>
      {!product ? (
        <ActivityIndicator size="large" color={brand} />
      ) : (
        <Text>{product.title}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
