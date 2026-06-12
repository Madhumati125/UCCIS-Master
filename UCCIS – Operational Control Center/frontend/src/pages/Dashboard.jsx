import { useState } from "react";

import Sidebar from "../components/Sidebar";
import ContentView from "../components/ContentView";

import "../styles/dashboard.css";

const Dashboard = () => {
  const [active, setActive] = useState("Health");

  return (
    <div className="layout">

      {/* ================= SIDEBAR ================= */}
      <Sidebar active={active} setActive={setActive} />

      {/* ================= MAIN CONTENT ================= */}
      <div className="content">

        {/* Header */}
        <div className="top-header">
          <h1>UCCIS COMMAND CENTER</h1>
          <p>Operational Drilldown System</p>
        </div>

        {/* Dynamic Content Area */}
        <ContentView active={active} />

      </div>

    </div>
  );
};

export default Dashboard;