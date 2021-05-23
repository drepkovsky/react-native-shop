// react
import React, { createContext, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import Styles from "../../constants/Styles";
import { Snack } from "../../types";
import { Text } from "../Themed";
import { useState } from "react";
import useThemeColor from "../../hooks/useThemeColor";
import Layout from "../../constants/Layout";

export type SnackbarContextProps = {
  show: ((snack: Snack) => any) | null;
};

export const SnackbarContext = createContext<SnackbarContextProps>({
  show: null,
});

const SnackbarProvider: React.FC = ({ children }) => {
  // state
  const [activeSnack, setActiveSnack] = useState<Snack | null>(null);
  const snackStack = useRef<Snack[]>([]).current;
  const [wasEndedManually, setEndedManually] = useState(false);

  // anim
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // color
  const paper = useThemeColor({}, "paper");

  const show = (snack: Snack) => {
    snackStack.push(snack);
    if (!activeSnack) {
      start();
    }
  };

  const start = () => {
    const snack = snackStack[0];
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
    }).start(() => setTimeout(end, snack.duration));
    setActiveSnack(snack);
  };

  const end = (manual = false) => {
    snackStack.splice(0, 1);

    Animated.timing(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
      duration: 500,
    }).start(() => {
      if (snackStack.length > 0) {
        start();
      } else {
        setActiveSnack(null);
      }
    });
  };

  return (
    <SnackbarContext.Provider value={{ show }}>
      {children}
      <Animated.View
        style={[styles.root, { opacity: fadeAnim, backgroundColor: paper }]}>
        <Text style={styles.align} color="brand" variant="subtitle">
          {activeSnack?.message}
        </Text>
      </Animated.View>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    left: Layout.spacing(3),
    right: Layout.spacing(3),
    top: 50,
    minHeight: 50,
    zIndex: 1000,
    paddingVertical: Layout.spacing(2),
    ...Styles.radius,
    ...Styles.shadows[3],
  },
  align: {
    textAlignVertical: "center",
    textAlign: "center",
  },
});
