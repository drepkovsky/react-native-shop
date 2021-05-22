import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import ProductsList from "../components/Products/ProductsList";

import { Text, View } from "../components/Themed";
import { useAppSelector } from "../hooks/useRedux";
import { loadProducts } from "../redux/actions/act_products";
import { useAppDispatch } from "./../hooks/useRedux";

export default function ProductsScreen() {
  // redux
  const { products, isLoading } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!products) dispatch(loadProducts());
  }, [products]);

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {!products?.length ? (
        <Text>No products...</Text>
      ) : (
        <ProductsList data={products} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
