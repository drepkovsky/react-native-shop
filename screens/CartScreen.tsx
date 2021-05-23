import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Card, CardContent } from "../components/Card/Card";
import Grid from "../components/Grid/Grid";

import { Container, Text, View } from "../components/Themed";
import Layout from "../constants/Layout";
import { useAppSelector } from "../hooks/useRedux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../redux/actions/act_carts";
import { Product } from "../types";
import { strTrim } from "../utils/utils";

export default function CartScreen() {
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

  return (
    <View style={styles.container}>
      {!Object.keys(productIds).length || !products ? (
        <EmptyCart />
      ) : (
        <FlatList
          style={styles.container}
          contentContainerStyle={{ paddingVertical: Layout.spacing(2) }}
          data={Object.keys(productIds)}
          renderItem={(item) => (
            <CartItem
              onAdd={onAdd}
              onRemove={onRemove}
              key={item.index}
              product={products[item.item]}
              count={productIds[item.item]}
            />
          )}
        />
      )}
    </View>
  );
}

const EmptyCart = () => {
  return (
    <Container style={styles.align}>
      <Ionicons name="ios-cart-outline" size={40} />
      <Text variant="subtitle">Cart is empty</Text>
    </Container>
  );
};

const CartItem = ({
  product,
  count,
  onAdd,
  onRemove,
}: {
  product?: Product;
  count?: number;
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
}) => {
  if (!product || !count) return null;
  return (
    <Card style={styles.card}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={2} sm={2}>
            <Image style={styles.image} source={{ uri: product.image }} />
          </Grid>
          <Grid item xs={3} sm={3}>
            <Container style={styles.align}>
              <Text>{strTrim(product.title, 30)} </Text>
            </Container>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Container style={styles.align}>
              <Text variant="title">{count}x</Text>
            </Container>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Container style={styles.align}>
              <TouchableOpacity onPress={() => onAdd(product.id)}>
                <Ionicons size={25} name="ios-add-circle-outline" />
              </TouchableOpacity>
            </Container>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Container style={styles.align}>
              <TouchableOpacity onPress={() => onRemove(product.id)}>
                <Ionicons size={25} name="ios-remove-circle-outline" />
              </TouchableOpacity>
            </Container>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: Layout.spacing(1),
    marginTop: Layout.spacing(0.5),
  },
  image: {
    width: "100%",
    minHeight: 50,
    resizeMode: "contain",
  },
  align: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
