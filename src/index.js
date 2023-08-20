import React from "react";
import ReactDOM from "react-dom/client";
// импорт провайдер из редакс
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* принимает значения в виде store  */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
