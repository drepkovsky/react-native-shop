import React, { useCallback, useEffect } from "react";
import {
  ActivityIndicator,
  Platform,
  RefreshControl,
  StyleSheet,
} from "react-native";

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
    dispatch(loadProducts());
  }, []);

  // misc
  const onProductClick = React.useCallback((productId: number) => {
    navigation.navigate("Details", { productId });
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(loadProducts());
  }, []);

  const getCount = useCallback(() => {
    return Object.keys(products).length;
  }, [products]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[!Boolean(getCount()) && styles.container]}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        {!Boolean(getCount()) ? (
          isLoading ? (
            <ActivityIndicator color={brand} />
          ) : (
            <Text>No products ...</Text>
          )
        ) : (
          <ProductsList
            data={Object.values(products)}
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
