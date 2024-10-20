import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { MainContextProvider } from "./contexts/MainContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
      {/* Esto resetea estilos globales, como el fondo y el padding */}
      <MainContextProvider>
        <App />
      </MainContextProvider>
      ,
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
