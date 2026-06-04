import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

/* =========================================================
GLOBAL STYLES
========================================================= */

import "./styles/dashboard.css";

import "./styles/commandCenter.css";

import "./styles/telemetry.css";

import "./styles/replay.css";

/* =========================================================
UCCIS FRONTEND RUNTIME
========================================================= */

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);