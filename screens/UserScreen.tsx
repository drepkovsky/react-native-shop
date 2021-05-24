import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, CardContent, CardImage } from "../components/Card/Card";

import { Container, Text, View } from "../components/Themed";
import Button from "../components/Themed/Button";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Styles from "../constants/Styles";
import { setColorScheme, useColorScheme } from "../hooks/useColorScheme";

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

  const colorScheme = useColorScheme();
  const setColor = setColorScheme();

  const toggleColor = useCallback(() => {
    if (setColor) setColor(colorScheme === "light" ? "dark" : "light");
  }, [colorScheme]);

  return (
    user && (
      <View style={[styles.container, styles.align]}>
        <CardImage style={styles.image} source={{ uri: user.image }} />
        <Text variant="title">{user.name}</Text>
        <Text color="brand" variant="subtitle">
          {user.email}
        </Text>

        <Container style={styles.settings}>
          <Button
            style={[
              styles.button,
              { backgroundColor: Colors[colorScheme].text },
            ]}
            color="transparent"
            onPress={toggleColor}>
            <Text
              variant="title"
              style={{
                color: Colors[colorScheme].background,
                textTransform: "uppercase",
              }}>
              {colorScheme}
            </Text>
          </Button>
        </Container>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    ...Styles.shadows[2],
  },
  container: {
    flex: 1,
    padding: Layout.spacing(1),
  },
  settings: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: Layout.spacing(2),
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
