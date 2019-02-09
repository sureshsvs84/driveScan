import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "assets/css/baseStyle.css";
import AppLayout from "./layouts/applayout";
import store from "./store";
const hist = createBrowserHistory();

export const indexRoutes = [{ path: "/", component: AppLayout }];

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
