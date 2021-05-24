// react
import React, { useEffect } from "react";
import { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

//internal
import Grid from "../components/Grid/Grid";
import { Container, Text, View } from "../components/Themed";
import Button from "../components/Themed/Button";
import Layout from "../constants/Layout";
import { useAppSelector } from "../hooks/useRedux";
import { cleanCart } from "../redux/actions/act_carts";
import { formatPrice } from "../utils/utils";
import SummaryProductCard from "../components/Products/SummaryProductCard";
import Styles from "../constants/Styles";
import { CartScreenNavigationProp } from "../types";
import { useSnackbar } from "../hooks/useSnackbar";

type CartScreenProp = { navigation: CartScreenNavigationProp };

export default function CartScreen({ navigation }: CartScreenProp) {
  // redux
  const productIds = useAppSelector((state) => state.cart.products);
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useDispatch();

  const snackbarShow = useSnackbar();

  const onConfirm = () => {
    navigation.navigate("Cart");
    if (snackbarShow)
      snackbarShow({ message: "Purchase successful", duration: 1000 });
    dispatch(cleanCart());
  };

  useEffect(() => {
    if (!Object.keys(productIds).length) navigation.navigate("Cart");
  }, [productIds]);

  const getTotal = useCallback(() => {
    let total = 0;

    Object.keys(productIds).forEach((key) => {
      total += products[key].price * productIds[key];
    });
    return total;
  }, [productIds]);

  return (
    <View style={styles.container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <Text variant="title">Total :</Text>
            <Text variant="heading" color="brand">
              {formatPrice(getTotal())}
            </Text>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Container style={styles.confirmContainer}>
              <Button onPress={onConfirm} style={[styles.confirm]}>
                <Text style={styles.confirmText} color="white" variant="title">
                  Confirm
                </Text>
              </Button>
            </Container>
          </Grid>
        </Grid>
      </Container>

      <FlatList
        contentContainerStyle={{
          paddingVertical: Layout.spacing(1),
        }}
        data={Object.keys(productIds)}
        keyExtractor={(item) => item}
        renderItem={(item) => (
          <SummaryProductCard
            product={products[item.item]}
            count={productIds[item.item]}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  confirmText: {
    textTransform: "uppercase",
  },
  confirm: {
    ...Styles.radius,
    height: 50,
    width: 150,
  },
  confirmContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
