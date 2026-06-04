import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";

import FloodSimulation from "./pages/FloodSimulation";

import TrafficSimulation from "./pages/TrafficSimulation";

import WasteSimulation from "./pages/WasteSimulation";

import "./index.css";

/*
=========================================================
ROOT RENDER
=========================================================
*/

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* =========================================
        MAIN DASHBOARD
        ========================================= */}

        <Route
          path="/"
          element={<App />}
        />

        {/* =========================================
        FLOOD SIMULATION PAGE
        ========================================= */}

        <Route
          path="/flood-simulation"
          element={
            <FloodSimulation />
          }
        />

        {/* =========================================
        TRAFFIC SIMULATION PAGE
        ========================================= */}

        <Route
          path="/traffic-simulation"
          element={
            <TrafficSimulation />
          }
        />

        {/* =========================================
        WASTE SIMULATION PAGE
        ========================================= */}

        <Route
          path="/waste-simulation"
          element={
            <WasteSimulation />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);