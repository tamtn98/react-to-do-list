import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./components/App";

import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router";
import router from "./config/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
