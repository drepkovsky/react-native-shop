// react
import { Ionicons } from "@expo/vector-icons";
import React, { Fragment, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";

// internal
import Grid from "../components/Grid/Grid";
import { Text, Container, View } from "../components/Themed";
import Layout from "../constants/Layout";
import { useAppSelector } from "../hooks/useRedux";
import { useSnackbar } from "../hooks/useSnackbar";
import useThemeColor from "../hooks/useThemeColor";
import { addProductToCart } from "../redux/actions/act_carts";
import { DetailsScreenRouteProp, Product } from "../types";
import { useAppDispatch } from "./../hooks/useRedux";

export type DetailsScreenProp = {
  route: DetailsScreenRouteProp;
};

export default function DetailsScreen({ route }: DetailsScreenProp) {
  // state
  const [product, setProduct] = useState<Product | null>(null);
  // params
  const { productId } = route.params;
  // redux
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  // color
  const brand = useThemeColor({}, "brand");
  const divider = useThemeColor({}, "divider");

  // hooks
  useEffect(() => {
    if (products && productId) setProduct(products.get(productId) || null);
  }, [productId, products]);

  // snackbar
  const showSnackbar = useSnackbar();

  const onAddToCard = () => {
    dispatch(addProductToCart(productId));
    if (showSnackbar) showSnackbar({ message: "Added to cart", duration: 500 });
  };

  return (
    <View style={styles.container}>
      {!product ? (
        <ActivityIndicator size="large" color={brand} />
      ) : (
        <Fragment>
          <Container style={styles.thumbnail}>
            <Image style={styles.image} source={{ uri: product.image }} />
          </Container>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.content}>
              <Container style={[styles.header, { borderColor: divider }]}>
                <Grid container>
                  <Grid item xs={6} sm={6}>
                    <Text variant="heading" color="brand" hasGutterBottom>
                      {product.price} $
                    </Text>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <Text
                      style={styles.category}
                      variant="body1"
                      color="disabled">
                      {product.category}
                    </Text>
                  </Grid>
                </Grid>
                <Text>
                  <Text variant="title" hasGutterBottom>
                    {product.title}
                  </Text>
                </Text>
              </Container>
              <Container style={styles.description}>
                <Text color="disabled" variant="body2" hasGutterBottom>
                  Description
                </Text>
                <Text>
                  <Text variant="body1" hasGutterBottom>
                    {product.description}
                  </Text>
                </Text>
              </Container>
            </View>
          </ScrollView>

          {/* bottom button */}
          <Container
            style={[styles.bottomContainer, { backgroundColor: brand }]}>
            <TouchableNativeFeedback onPress={onAddToCard}>
              <Container>
                <Text variant="title" style={styles.bottomText}>
                  <Ionicons
                    name="ios-cart"
                    size={25}
                    style={{ marginRight: Layout.spacing(1), color: "#ffff" }}
                  />
                  Add to cart
                </Text>
              </Container>
            </TouchableNativeFeedback>
          </Container>
        </Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollView: {
    paddingTop: 300,
    paddingBottom: 50,
    zIndex: 10,
  },
  header: {
    borderBottomWidth: 1,
    paddingBottom: Layout.spacing(0.5),
  },
  thumbnail: {
    position: "absolute",
    zIndex: -10,
    top: 0,
    left: 0,
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
  },
  description: {
    paddingVertical: Layout.spacing(2),
  },
  content: {
    flex: 0.5,
    padding: Layout.spacing(2),
  },
  category: {
    textAlign: "right",
    textAlignVertical: "bottom",
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 50,
    zIndex: 100,
  },
  bottomText: {
    color: "#ffff",
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
