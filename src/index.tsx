import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import store from "./state/store";
import Root from "./components/Root";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
