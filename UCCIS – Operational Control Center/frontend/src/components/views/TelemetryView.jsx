import { useEffect, useState } from "react";
import TelemetryChart from "../Charts/TelemetryChart";

const TelemetryView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/telemetry")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => setData(null));
  }, []);

  const telemetry = data?.data || [];

  return (
    <div className="panel">

      {/* ================= HEADER ================= */}
      <h2>Telemetry Command Center</h2>

      <p style={{ fontSize: "13px", color: "#cbd5e1" }}>
        Telemetry provides real-time system performance metrics including runtime load,
        CPU state, system responsiveness, and operational health signals across services.
      </p>

      {/* ================= KPI CARDS ================= */}
      <div className="metrics-grid" style={{ marginTop: "15px" }}>

        <div className="metric-card">
          <h3>Total Events</h3>
          <h2>{telemetry.length}</h2>
        </div>

        <div className="metric-card">
          <h3>Normal State</h3>
          <h2>
            {telemetry.filter(t => t.state === "NORMAL").length}
          </h2>
        </div>

        <div className="metric-card">
          <h3>High Load</h3>
          <h2>
            {telemetry.filter(t => t.state === "HIGH").length}
          </h2>
        </div>

        <div className="metric-card">
          <h3>Critical</h3>
          <h2>
            {telemetry.filter(t => t.state === "CRITICAL").length}
          </h2>
        </div>

      </div>

      {/* ================= DONUT CHART ================= */}
      <div style={{ marginTop: "25px" }}>
        <h3>Telemetry Load Distribution</h3>

        <TelemetryChart />
      </div>

      {/* ================= TELEMETRY CARDS ================= */}
      <div style={{ marginTop: "25px" }}>
        <h3>Live Telemetry Feed</h3>

        <div className="grid-cards">

          {telemetry.map((t, idx) => (
            <div key={idx} className="metric-card">

              <h3>{t.service || "Service"}</h3>

              <p><b>State:</b> {t.state}</p>
              <p><b>CPU:</b> {t.cpu || "N/A"}%</p>
              <p><b>Memory:</b> {t.memory || "N/A"}%</p>
              <p><b>Status:</b> {t.status || "UNKNOWN"}</p>

            </div>
          ))}

        </div>
      </div>

      {/* ================= BACKEND RESPONSE ================= */}
      <div style={{ marginTop: "25px" }} className="panel">
        <h3>Backend Response</h3>

        <pre className="json-box">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>

    </div>
  );
};

export default TelemetryView;