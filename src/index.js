import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { storeApp } from "./_components/store";
import { TotalProvider } from "./component/TotalContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeApp}>
      <TotalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TotalProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
