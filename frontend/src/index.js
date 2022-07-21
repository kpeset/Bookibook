import React from "react";
import ReactDOM from "react-dom/client";
import ExportContext from "./contexts/Contexts";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ExportContext.Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ExportContext.Provider>
);
