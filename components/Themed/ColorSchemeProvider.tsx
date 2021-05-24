import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";

export const ColorSchemeContext = createContext<{
  colorScheme: "light" | "dark";
  setColorScheme: ((c: "light" | "dark") => void) | null;
}>({
  colorScheme: "light",
  setColorScheme: null,
});

const ColorSchemeProvider: React.FC = ({ children }) => {
  const systemScheme = _useColorScheme() as NonNullable<ColorSchemeName>;
  const [colorScheme, setColorScheme] =
    useState<"light" | "dark">(systemScheme);

  useEffect(() => {
    AsyncStorage.getItem("colorScheme")
      .then((res) => {
        const scheme = res != "light" && res != "dark" ? "light" : res;
        setColorScheme(scheme);
      })
      .catch((err) => {
        setColorScheme(systemScheme);
      });
  }, []);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;
