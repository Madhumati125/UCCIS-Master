import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import AppRoutes from "./routes/AppRoutes";

import "./styles.css";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <AppRoutes />
      </div>
    </div>
  );
}