import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./theme.ts";
import { ChakraBaseProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
