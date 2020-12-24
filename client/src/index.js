import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.subscribe(() => {
  console.log("%c Rendered with ? ??", "background: purple; color: #fff");
  console.log(store.getState());
});
