import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a1a1a",
    800: "#2e2e2e",
    700: "#4d4d4d",
    600: "#666666",
    500: "#808080",
    400: "#999999",
    300: "#b3b3b3",
    200: "#cccccc",
    100: "#e6e6e6",
    50: "#f2f2f2",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
