import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

const { Button, Alert } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Alert,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
