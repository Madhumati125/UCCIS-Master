import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Global Styles
import "./styles/dashboard.css";
import "./styles/cards.css";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);