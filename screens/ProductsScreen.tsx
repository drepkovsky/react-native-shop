import React, { useEffect } from "react";
import { ActivityIndicator, RefreshControl, StyleSheet } from "react-native";

import { ProductScreenNavigationProp } from "../types";
import ProductsList from "../components/Products/ProductsList";
import { Text, View } from "../components/Themed";
import { useAppSelector } from "../hooks/useRedux";
import useThemeColor from "../hooks/useThemeColor";
import { loadProducts } from "../redux/actions/act_products";
import { useAppDispatch } from "./../hooks/useRedux";
import { ScrollView } from "react-native-gesture-handler";

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

  return (
    <View>
      <ScrollView
        contentContainerStyle={!products?.size && styles.container}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        {!products?.size ? (
          isLoading ? (
            <ActivityIndicator color={brand} />
          ) : (
            <Text>No products ...</Text>
          )
        ) : (
          <ProductsList
            data={Array.from(products.values())}
            onProductClick={onProductClick}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
