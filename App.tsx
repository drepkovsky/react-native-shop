import React from "react";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

// hooks
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";

// nav
import Navigation from "./navigation";

// redux
import store from "./redux/store";
import SnackbarProvider from "./components/Snackbar/Snackbar";

// component
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <SnackbarProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
          </SnackbarProvider>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
