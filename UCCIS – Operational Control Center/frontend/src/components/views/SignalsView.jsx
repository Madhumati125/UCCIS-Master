import { useEffect, useState } from "react";
import SignalChart from "../Charts/SignalChart";

const SignalsView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/signals")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => setData(null));
  }, []);

  const signals = data?.data || [];

  // ================= SAFE NORMALIZER =================
  const norm = (v) => (v || "").toString().toUpperCase();

  // ================= CONSISTENT COUNTS =================
  const total = signals.length;

  const active = signals.filter(s =>
    norm(s.status) === "ACTIVE"
  ).length;

  const resolved = signals.filter(s =>
    norm(s.status) === "RESOLVED"
  ).length;

  const critical = signals.filter(s =>
    norm(s.priority) === "CRITICAL"
  ).length;

  return (
    <div className="panel">

      {/* ================= HEADER ================= */}
      <h2>Signals Command Center</h2>

      <p style={{ fontSize: "13px", color: "#cbd5e1" }}>
        Real-time signal ingestion system tracking system events,
        categorized alerts, and upstream incident triggers.
      </p>

      {/* ================= KPI CARDS ================= */}
      <div className="metrics-grid">

        <div className="metric-card">
          <h3>Total Signals</h3>
          <h2>{total}</h2>
        </div>

        <div className="metric-card">
          <h3>Active</h3>
          <h2>{active}</h2>
        </div>

        <div className="metric-card">
          <h3>Resolved</h3>
          <h2>{resolved}</h2>
        </div>

        <div className="metric-card">
          <h3>Critical</h3>
          <h2>{critical}</h2>
        </div>

      </div>

      {/* ================= CHART ================= */}
      <div style={{ marginTop: "25px" }}>
        <h3>Signal Distribution</h3>

        <SignalChart />
      </div>

      {/* ================= LIVE FEED ================= */}
      <div style={{ marginTop: "25px" }}>
        <h3>Live Signal Feed</h3>

        <div className="grid-cards">

          {signals.map((s, i) => (
            <div key={i} className="metric-card">

              <h3>{s.signal_type || "Signal"}</h3>

              <p><b>Status:</b> {s.status}</p>
              <p><b>Priority:</b> {s.priority}</p>
              <p><b>Source:</b> {s.source || "N/A"}</p>
              <p><b>Time:</b> {s.created_at || "N/A"}</p>

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

export default SignalsView;