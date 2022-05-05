import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./state/reducers";
import "bulma/css/bulma.css";
import "./styles.scss";

const store = legacy_createStore(reducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
