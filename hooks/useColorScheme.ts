import { useContext } from "react";
import { ColorSchemeContext } from "../components/Themed/ColorSchemeProvider";

export function useColorScheme(): "light" | "dark" {
  return useContext(ColorSchemeContext).colorScheme;
}

export function setColorScheme() {
  return useContext(ColorSchemeContext).setColorScheme;
}
