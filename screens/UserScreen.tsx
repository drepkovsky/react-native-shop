import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Card, CardContent, CardImage } from "../components/Card/Card";

import { Text, View } from "../components/Themed";
import Layout from "../constants/Layout";

export default function UserScreen() {
  const [user, setUser] =
    useState<{ name: string; email: string; image: string } | null>(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) =>
        setUser({
          name: `${json.results[0].name.first} ${json.results[0].name.last}`,
          email: json.results[0].email,
          image: json.results[0].picture.large,
        })
      );
  }, []);

  return (
    user && (
      <View style={[styles.container, styles.align]}>
        <CardImage style={styles.image} source={{ uri: user.image }} />
        <Text variant="title">{user.name}</Text>
        <Text color="brand" variant="subtitle">
          {user.email}
        </Text>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Layout.spacing(1),
  },
  card: {
    marginTop: 50,
    overflow: "visible",
  },
  align: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
