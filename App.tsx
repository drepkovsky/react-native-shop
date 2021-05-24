// react
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

// hooks
import useCachedResources from "./hooks/useCachedResources";

// nav
import Navigation from "./navigation";

// redux
import store from "./redux/store";
import SnackbarProvider from "./components/Snackbar/Snackbar";
import ColorSchemeProvider from "./components/Themed/ColorSchemeProvider";

// component
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ColorSchemeProvider>
          <SafeAreaProvider>
            <SnackbarProvider>
              <Navigation />
            </SnackbarProvider>
          </SafeAreaProvider>
        </ColorSchemeProvider>
      </Provider>
    );
  }
}
