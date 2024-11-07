import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { MainContextProvider } from "./contexts/MainContext";
import { LoginContextProvider } from "./contexts/LoginContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
      {/* Esto resetea estilos globales, como el fondo y el padding */}
      <LoginContextProvider>
        <MainContextProvider>
          <App />
        </MainContextProvider>
      </LoginContextProvider>
      ,
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
