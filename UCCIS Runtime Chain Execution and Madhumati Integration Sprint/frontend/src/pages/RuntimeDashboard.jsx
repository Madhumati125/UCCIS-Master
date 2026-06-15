import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import IncidentChart from "../components/IncidentChart";

import { getDashboard, executeSignal } from "../services/api";

const RuntimeDashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  const [activePanel, setActivePanel] = useState("dashboard");

  const loadDashboard = async () => {
    try {
      const response = await getDashboard();
      setDashboard(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const handleExecuteSignal = async () => {
    try {
      await executeSignal({
        signal_id: `SIG-${Date.now()}`,
        signal_type: "Flood",
      });

      loadDashboard();
    } catch (error) {
      console.error(error);
    }
  };

  if (!dashboard) return <h2>Loading...</h2>;

  const cards = dashboard.cards || {};
  const analytics = dashboard.analytics || {};

  return (
    <div style={{ display: "flex" }}>

      {/* SIDEBAR */}
      <Sidebar
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />

      <div className="main-content">

        {/* HEADER */}
        <div className="dashboard-header">
          <h1>
            {activePanel === "dashboard" && "Dashboard Runtime State"}
            {activePanel === "signals" && "Signal Layer Analytics"}
            {activePanel === "runtime" && "System Runtime Health"}
          </h1>

          <button onClick={handleExecuteSignal}>
            Execute Signal
          </button>
        </div>

        {/* ========================= */}
        {/* DASHBOARD VIEW */}
        {/* ========================= */}

        {activePanel === "dashboard" && (
          <>
            <div
              className="runtime-entry"
              onClick={() => setActivePanel("runtime")}
            >
              <h3>System Runtime Health</h3>
              <p>Click to open complete runtime analytics</p>
            </div>

            <div className="cards">
              <StatCard title="Signals" value={cards.signals} />
              <StatCard title="Telemetry" value={cards.telemetry} />
              <StatCard title="Incidents" value={cards.incidents} />
              <StatCard title="Escalations" value={cards.escalations} />
            </div>

            <div className="chart-section">
              <h3>Signal Overview</h3>

              <IncidentChart
                signals={analytics.signals || 0}
                incidents={analytics.incidents || 0}
                escalations={analytics.escalations || 0}
              />
            </div>
          </>
        )}

        {/* ========================= */}
        {/* SIGNAL LAYER VIEW */}
        {/* ========================= */}

        {activePanel === "signals" && (
          <div className="drilldown-panel">

            <h2>Signal Layer - Deep Analytics</h2>

            <div className="cards">
              <StatCard title="Signals" value={cards.signals} />
              <StatCard title="Telemetry" value={cards.telemetry} />
              <StatCard title="Incidents" value={cards.incidents} />
              <StatCard title="Escalations" value={cards.escalations} />
            </div>

            <div className="chart-section">
              <IncidentChart
                signals={analytics.signals || 0}
                incidents={analytics.incidents || 0}
                escalations={analytics.escalations || 0}
              />
            </div>

            <div className="backend-response">
              <h3>Backend Response</h3>
              <pre>{JSON.stringify(dashboard, null, 2)}</pre>
            </div>

          </div>
        )}

        {/* ========================= */}
        {/* RUNTIME HEALTH VIEW */}
        {/* ========================= */}

        {activePanel === "runtime" && (
          <div className="drilldown-panel">

            <h2>System Runtime Health - Full Analytics</h2>

            {/* METRICS */}
            <div className="cards">
              <StatCard title="Status" value={cards.runtimeHealth} />
              <StatCard title="CPU Usage" value={analytics.cpu || 45} />
              <StatCard title="Memory Usage" value={analytics.memory || 30} />
              <StatCard title="Latency" value={`${analytics.latency || 120} ms`} />
              <StatCard title="Error Rate" value={analytics.errorRate || "0.02%"} />
              <StatCard title="Uptime" value={dashboard.summary?.uptime || "99.99%"} />
            </div>

            {/* CHART 1 */}
            <div className="chart-section">
              <h3>Runtime Performance Trend</h3>

              <IncidentChart
                signals={analytics.signals || 0}
                incidents={analytics.incidents || 0}
                escalations={analytics.escalations || 0}
              />
            </div>

            {/* ========================= */}
            {/* SYSTEM LOAD PIE CHART */}
            {/* ========================= */}

            <div className="chart-section">
              <h3>System Load Distribution</h3>

              <svg width="220" height="220" viewBox="0 0 36 36">

                {/* CPU */}
                <circle
                  r="15.915"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  stroke="#ff4d4f"
                  strokeWidth="3.5"
                  strokeDasharray={`${analytics.cpu || 40} ${100 - (analytics.cpu || 40)}`}
                  strokeDashoffset="25"
                />

                {/* MEMORY */}
                <circle
                  r="15.915"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  stroke="#1890ff"
                  strokeWidth="3.5"
                  strokeDasharray={`${analytics.memory || 30} ${100 - (analytics.memory || 30)}`}
                  strokeDashoffset="50"
                />

                {/* NETWORK */}
                <circle
                  r="15.915"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  stroke="#52c41a"
                  strokeWidth="3.5"
                  strokeDasharray={`${analytics.network || 20} ${100 - (analytics.network || 20)}`}
                  strokeDashoffset="75"
                />

                {/* DISK */}
                <circle
                  r="15.915"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  stroke="#faad14"
                  strokeWidth="3.5"
                  strokeDasharray={`${analytics.disk || 10} ${100 - (analytics.disk || 10)}`}
                  strokeDashoffset="90"
                />

              </svg>

              {/* LEGEND */}
              <div style={{ marginTop: 10 }}>
                <p>🔴 CPU: {analytics.cpu || 40}%</p>
                <p>🔵 Memory: {analytics.memory || 30}%</p>
                <p>🟢 Network: {analytics.network || 20}%</p>
                <p>🟡 Disk: {analytics.disk || 10}%</p>
              </div>
            </div>

            {/* BACKEND RESPONSE */}
            <div className="backend-response">
              <h3>Runtime Backend Response</h3>
              <pre>{JSON.stringify(dashboard, null, 2)}</pre>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default RuntimeDashboard;