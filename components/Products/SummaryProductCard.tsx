// react
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

// internal
import Layout from "../../constants/Layout";
import useThemeColor from "../../hooks/useThemeColor";
import { Product } from "../../types";
import { formatPrice, strTrim } from "../../utils/utils";
import { Card } from "../Card/Card";
import Grid from "../Grid/Grid";
import { Container, Text } from "../Themed";

const SummaryProductCard = ({
  product,
  count,
}: {
  product?: Product;
  count?: number;
}) => {
  if (!product || !count) return null;

  return (
    <Card style={styles.card}>
      <Grid container>
        <Grid item xs={2} sm={2} style={{ backgroundColor: "#fff" }}>
          <Image style={styles.image} source={{ uri: product.image }} />
        </Grid>

        <Grid item container spacing={1} xs={10} sm={10}>
          <Grid item xs={6} sm={6}>
            <Container style={styles.align}>
              <Text>{strTrim(product.title, 50)} </Text>
            </Container>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Container style={styles.align}>
              <Text>{count}x</Text>
            </Container>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Container style={styles.align}>
              <Text variant="subtitle">
                {formatPrice(product.price * count)}
              </Text>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default SummaryProductCard;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  align: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    marginHorizontal: Layout.spacing(1),
    marginTop: Layout.spacing(0.5),
    height: 70,
  },
});
