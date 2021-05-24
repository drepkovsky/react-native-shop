// react
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

//internal
import Grid from "../components/Grid/Grid";
import CartProductCart from "../components/Products/CartProductCard";
import { Container, Paper, Text, View } from "../components/Themed";
import Button from "../components/Themed/Button";
import Layout from "../constants/Layout";
import { useAppSelector } from "../hooks/useRedux";
import useThemeColor from "../hooks/useThemeColor";
import {
  addProductToCart,
  removeProductFromCart,
} from "../redux/actions/act_carts";
import { CartScreenNavigationProp } from "../types";
import { formatPrice } from "../utils/utils";

type CartScreenProp = { navigation: CartScreenNavigationProp };

export default function CartScreen({ navigation }: CartScreenProp) {
  // redux
  const productIds = useAppSelector((state) => state.cart.products);
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useDispatch();

  const onAdd = (id: number) => {
    dispatch(addProductToCart(id));
  };
  const onRemove = (id: number) => {
    dispatch(removeProductFromCart(id));
  };

  const onBuyClick = useCallback(() => {
    navigation.navigate("Summary");
  }, [navigation]);

  const getTotal = useCallback(() => {
    let total = 0;

    Object.keys(productIds).forEach((key) => {
      total += products[key].price * productIds[key];
    });
    return total;
  }, [productIds]);

  const getCount = useCallback(() => {
    return Object.keys(productIds).length;
  }, [productIds]);

  return (
    <View style={styles.container}>
      {!getCount() || !products ? (
        <EmptyCart />
      ) : (
        <FlatList
          style={styles.container}
          contentContainerStyle={{ paddingVertical: Layout.spacing(2) }}
          data={Object.keys(productIds)}
          keyExtractor={(item) => item}
          renderItem={(item) => (
            <CartProductCart
              onAdd={onAdd}
              onRemove={onRemove}
              key={item.index}
              product={products[item.item]}
              count={productIds[item.item]}
            />
          )}
        />
      )}
      {/* bottom button */}
      <Container style={[styles.bottomContainer]}>
        <Grid container>
          <Grid item xs={7} sm={7}>
            <Paper style={[styles.fill]}>
              <Grid container style={[styles.fill]}>
                <Grid item xs={6} sm={6}>
                  <Container style={[styles.align]}>
                    <Text variant="title">Total :</Text>
                  </Container>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Container style={[styles.align]}>
                    <Text variant="title" color="brand">
                      {formatPrice(getTotal())}
                    </Text>
                  </Container>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={5} sm={5}>
            <Button
              onPress={onBuyClick}
              disabled={Boolean(!getCount())}
              style={styles.fill}>
              <Text variant="title" style={[styles.bottomButtonText]}>
                Buy now
              </Text>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </View>
  );
}

const EmptyCart = () => {
  const color = useThemeColor({}, "text");

  return (
    <Container style={styles.align}>
      <Ionicons color={color} name="ios-cart-outline" size={40} />
      <Text variant="subtitle">Your cart is empty</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
  },
  align: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 60,
    zIndex: 100,
  },
  fill: {
    width: "100%",
    height: "100%",
  },
  bottomButtonText: {
    color: "#ffff",
    textTransform: "uppercase",
  },
});
