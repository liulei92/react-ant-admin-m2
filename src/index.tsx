// 兼容 ie11
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import "normalize.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
      <Suspense fallback={<div />}>
        <Switch>
          <Route
            path="/"
            render={(routerProps) => {
              return <App {...routerProps} />;
            }}
          />
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
