import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { thunk } from "redux-thunk";

import reducers from "./reducers";
import App from "./App";

import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="978241688763-f66j7vnau9csv4es9l926eivhflbpf71.apps.googleusercontent.com">
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
