import React, { useEffect } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from "react-native";

import { ProductScreenNavigationProp } from "../types";
import ProductsList from "../components/Products/ProductsList";
import { Container, Text, View } from "../components/Themed";
import { useAppSelector } from "../hooks/useRedux";
import useThemeColor from "../hooks/useThemeColor";
import { loadProducts } from "../redux/actions/act_products";
import { useAppDispatch } from "./../hooks/useRedux";

// fetches all products from database, and populates product list

type ProductScreenProp = { navigation: ProductScreenNavigationProp };

export default function ProductsScreen({ navigation }: ProductScreenProp) {
  // redux
  const { products, isLoading } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  // colors
  const brand = useThemeColor({}, "brand");

  // effects
  useEffect(() => {
    if (!products) dispatch(loadProducts());
  }, [products]);

  // misc
  const onProductClick = React.useCallback((productId: number) => {
    navigation.navigate("Details", { productId });
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(loadProducts());
  }, []);

  return !products?.size ? (
    <Container style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={brand} />
      ) : (
        <Text>No products ...</Text>
      )}
    </Container>
  ) : (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
    >
      <ProductsList
        data={Array.from(products.values())}
        onProductClick={onProductClick}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
