import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
ReactDOM.render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={1}>
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
