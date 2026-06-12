import { useEffect, useState } from "react";

import SignalChart from "../Charts/SignalChart";
import IncidentChart from "../Charts/IncidentChart";
import EscalationChart from "../Charts/EscalationChart";
import TelemetryChart from "../Charts/TelemetryChart";

const HealthView = () => {
  const [health, setHealth] = useState(null);
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then(res => res.json())
      .then(res => setHealth(res))
      .catch(() => setHealth(null));

    fetch("http://localhost:5000/api/dashboard")
      .then(res => res.json())
      .then(res => setDashboard(res))
      .catch(() => setDashboard(null));
  }, []);

  const isActive =
    health?.backend === "ONLINE" &&
    health?.database === "CONNECTED" &&
    health?.runtime === "ACTIVE";

  return (
    <div className="panel">

      {/* ================= HEADER ================= */}
      <h2>System Health Overview</h2>

      <p style={{ fontSize: "13px", color: "#cbd5e1" }}>
        UCCIS (Unified Command & Control Intelligence System) provides real-time
        monitoring of signals, incidents, escalations, telemetry, replay, and runtime logs.
      </p>

      {/* ================= KPI CARDS ================= */}
      <div className="metrics-grid" style={{ marginTop: "15px" }}>

        {/* SYSTEM STATUS */}
        <div className="metric-card">
          <h3>System Health</h3>

          <h2>
            {health ? (
              isActive ? "🟢 ACTIVE" : "🔴 DEGRADED"
            ) : (
              "⏳ LOADING"
            )}
          </h2>

          <p style={{ fontSize: "12px", color: "#9ca3af" }}>
            Backend + DB + Runtime {isActive ? "ACTIVE" : "ISSUE"}
          </p>
        </div>

        {/* BACKEND */}
        <div className="metric-card">
          <h3>Backend</h3>
          <h2>{health?.backend || "UNKNOWN"}</h2>
        </div>

        {/* DATABASE */}
        <div className="metric-card">
          <h3>Database</h3>
          <h2>{health?.database || "UNKNOWN"}</h2>
        </div>

        {/* RUNTIME */}
        <div className="metric-card">
          <h3>Runtime</h3>
          <h2>{health?.runtime || "UNKNOWN"}</h2>
        </div>

        {/* SIGNALS */}
        <div className="metric-card">
          <h3>Signals</h3>
          <h2>{dashboard?.activeSignals ?? 0}</h2>
        </div>

        {/* INCIDENTS */}
        <div className="metric-card">
          <h3>Incidents</h3>
          <h2>{dashboard?.activeIncidents ?? 0}</h2>
        </div>

        {/* ESCALATIONS */}
        <div className="metric-card">
          <h3>Escalations</h3>
          <h2>{dashboard?.escalations ?? 0}</h2>
        </div>

      </div>

      {/* ================= CHARTS ================= */}

      <div style={{ marginTop: "25px" }}>
        <h3>Signals</h3>
        <SignalChart />
      </div>

      <div style={{ marginTop: "25px" }}>
        <h3>Incidents</h3>
        <IncidentChart />
      </div>

      <div style={{ marginTop: "25px" }}>
        <h3>Escalations</h3>
        <EscalationChart />
      </div>

      <div style={{ marginTop: "25px" }}>
        <h3>Telemetry</h3>
        <TelemetryChart />
      </div>

      {/* ================= SUMMARY ================= */}

      <div className="panel" style={{ marginTop: "25px" }}>
        <h3>Operational Summary</h3>

        <ul style={{ fontSize: "13px", color: "#cbd5e1" }}>
          <li>✔ Signal ingestion pipeline active</li>
          <li>✔ Incident detection engine running</li>
          <li>✔ Escalation system operational</li>
          <li>✔ Telemetry monitoring active</li>
          <li>✔ Replay system enabled</li>
          <li>✔ Runtime logs capturing events</li>
        </ul>
      </div>

    </div>
  );
};

export default HealthView;