// react
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

// internal
import Layout from "../../constants/Layout";
import useThemeColor from "../../hooks/useThemeColor";
import { Product } from "../../types";
import { strTrim } from "../../utils/utils";
import { Card, CardContent } from "../Card/Card";
import Grid from "../Grid/Grid";
import { Container, Text } from "../Themed";

const CartProductCart = ({
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
  const textColor = useThemeColor({}, "text");

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
                onPress={() => onAdd(product.id)}>
                <Ionicons
                  color={textColor}
                  size={25}
                  name="ios-add-circle-outline"
                />
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
                onPress={() => onRemove(product.id)}>
                <Ionicons
                  color={textColor}
                  size={25}
                  name="ios-remove-circle-outline"
                />
              </Pressable>
            </Container>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default CartProductCart;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 50,
  },
  align: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginHorizontal: Layout.spacing(1),
    marginTop: Layout.spacing(0.5),
  },
});
