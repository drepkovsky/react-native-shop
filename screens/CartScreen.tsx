import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { Image, Platform, Pressable, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Card, CardContent } from "../components/Card/Card";
import Grid from "../components/Grid/Grid";

import { Container, Paper, Text, View } from "../components/Themed";
import Layout from "../constants/Layout";
import { useAppSelector } from "../hooks/useRedux";
import useThemeColor from "../hooks/useThemeColor";
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

  const getTotal = () => {
    let total = 0;

    Object.keys(productIds).forEach((key) => {
      total += products[key].price * productIds[key];
    });
    return total;
  };

  const brand = useThemeColor({}, "brand");

  return (
    <View style={styles.container}>
      {!Object.keys(productIds).length || !products ? (
        <EmptyCart />
      ) : (
        <FlatList
          style={styles.container}
          contentContainerStyle={{ paddingVertical: Layout.spacing(2) }}
          data={Object.keys(productIds)}
          keyExtractor={(item) => item}
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
      {/* bottom button */}
      <Container style={[styles.bottomContainer]}>
        <Grid container>
          <Grid item xs={7} sm={7}>
            <Paper style={[styles.fill]}>
              <Grid container>
                <Grid item xs={6} sm={6}>
                  <Text
                    variant="title"
                    style={[styles.totalText, { textAlign: "center" }]}
                  >
                    Total :
                  </Text>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Text
                    variant="title"
                    color="brand"
                    style={[styles.totalText, { textAlign: "center" }]}
                  >
                    {`${getTotal()} $`}
                  </Text>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={5} sm={5}>
            <Container style={[styles.fill, { backgroundColor: brand }]}>
              <Pressable
                android_ripple={{ color: "#fff" }}
                style={({ pressed }) => [
                  {
                    opacity: pressed && Platform.OS === "ios" ? 0.5 : 1,
                  },
                ]}
              >
                <Text variant="title" style={[styles.bottomButtonText]}>
                  Buy now
                </Text>
              </Pressable>
            </Container>
          </Grid>
        </Grid>
      </Container>
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
              <Pressable
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.5 : 1,
                  },
                ]}
                hitSlop={20}
                onPress={() => onAdd(product.id)}
              >
                <Ionicons size={25} name="ios-add-circle-outline" />
              </Pressable>
            </Container>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Container style={styles.align}>
              <Pressable
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.5 : 1,
                  },
                ]}
                hitSlop={20}
                onPress={() => onRemove(product.id)}
              >
                <Ionicons size={25} name="ios-remove-circle-outline" />
              </Pressable>
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
    textAlign: "center",
    width: "100%",
    height: "100%",
    textTransform: "uppercase",
    textAlignVertical: "center",
  },
  totalText: {
    width: "100%",
    height: "100%",
    textAlignVertical: "center",
  },
});
