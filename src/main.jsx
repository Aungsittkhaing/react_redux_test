import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./stores/store.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
