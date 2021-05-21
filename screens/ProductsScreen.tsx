import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, CardContent, CardHeader } from "../components/Card/Card";
import Grid from "../components/Grid/Grid";

import { Container, Text, View } from "../components/Themed";
import Layout from "../constants/Layout";

const data = [
  {
    title: "Card",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
aut officiis aliquam sunt repellendus soluta a. Ipsa odio, atque
voluptate asperiores quae vero nostrum animi vitae blanditiis
facere porro dignissimos?`,
  },
  {
    title: "Card",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
aut officiis aliquam sunt repellendus soluta a. Ipsa odio, atque
voluptate asperiores quae vero nostrum animi vitae blanditiis
facere porro dignissimos?`,
  },
  {
    title: "Card",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
aut officiis aliquam sunt repellendus soluta a. Ipsa odio, atque
voluptate asperiores quae vero nostrum animi vitae blanditiis
facere porro dignissimos?`,
  },
  {
    title: "Card",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
aut officiis aliquam sunt repellendus soluta a. Ipsa odio, atque
voluptate asperiores quae vero nostrum animi vitae blanditiis
facere porro dignissimos?`,
  },
  {
    title: "Card",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
aut officiis aliquam sunt repellendus soluta a. Ipsa odio, atque
voluptate asperiores quae vero nostrum animi vitae blanditiis
facere porro dignissimos?`,
  },
  {
    title: "Card",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
aut officiis aliquam sunt repellendus soluta a. Ipsa odio, atque
voluptate asperiores quae vero nostrum animi vitae blanditiis
facere porro dignissimos?`,
  },
  {
    title: "Card",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
aut officiis aliquam sunt repellendus soluta a. Ipsa odio, atque
voluptate asperiores quae vero nostrum animi vitae blanditiis
facere porro dignissimos?`,
  },
  {
    title: "Card",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
aut officiis aliquam sunt repellendus soluta a. Ipsa odio, atque
voluptate asperiores quae vero nostrum animi vitae blanditiis
facere porro dignissimos?`,
  },
  {
    title: "Card",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
aut officiis aliquam sunt repellendus soluta a. Ipsa odio, atque
voluptate asperiores quae vero nostrum animi vitae blanditiis
facere porro dignissimos?`,
  },
  {
    title: "Card",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
aut officiis aliquam sunt repellendus soluta a. Ipsa odio, atque
voluptate asperiores quae vero nostrum animi vitae blanditiis
facere porro dignissimos?`,
  },
];

export default function ProductsScreen() {
  return (
    <Container style={styles.container}>
      <FlatList
        scrollEnabled={true}
        style={{ overflow: "visible" }}
        data={data}
        numColumns={2}
        renderItem={(item) => (
          <Container style={styles.card}>
            <Card>
              <CardHeader>
                <Text variant="subtitle">{item.item.title}</Text>
              </CardHeader>
              <CardContent>
                <Text>{item.item.content}</Text>
              </CardContent>
            </Card>
          </Container>
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "visible",
    flex: 1,
  },
  card: {
    maxWidth: "50%",
    padding: Layout.spacing(1),
  },
});
