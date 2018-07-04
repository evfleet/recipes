import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./state/store";
import Root from "./components/Root";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
