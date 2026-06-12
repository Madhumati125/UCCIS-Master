import { useEffect, useState } from "react";
import IncidentChart from "../Charts/IncidentChart";

const IncidentsView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/incidents")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => setData(null));
  }, []);

  const incidents = data?.data || [];

  // ================= SAFE NORMALIZATION =================
  const normalize = (v) => (v || "").toString().toUpperCase();

  // ================= CONSISTENT COUNTERS =================
  const total = incidents.length;

  const critical = incidents.filter(i =>
    normalize(i.severity) === "CRITICAL"
  ).length;

  const high = incidents.filter(i =>
    normalize(i.severity) === "HIGH"
  ).length;

  const resolved = incidents.filter(i =>
    normalize(i.status) === "RESOLVED"
  ).length;

  return (
    <div className="panel">

      {/* ================= HEADER ================= */}
      <h2>Incidents Command Center</h2>

      <p style={{ fontSize: "13px", color: "#cbd5e1" }}>
        Incident tracking system showing anomalies derived from signals,
        severity classification, and operational response workflow.
      </p>

      {/* ================= KPI CARDS ================= */}
      <div className="metrics-grid">

        <div className="metric-card">
          <h3>Total Incidents</h3>
          <h2>{total}</h2>
        </div>

        <div className="metric-card">
          <h3>Critical</h3>
          <h2>{critical}</h2>
        </div>

        <div className="metric-card">
          <h3>High</h3>
          <h2>{high}</h2>
        </div>

        <div className="metric-card">
          <h3>Resolved</h3>
          <h2>{resolved}</h2>
        </div>

      </div>

      {/* ================= CHART ================= */}
      <div style={{ marginTop: "25px" }}>
        <h3>Incident Severity Breakdown</h3>

        <IncidentChart />
      </div>

      {/* ================= LIVE FEED ================= */}
      <div style={{ marginTop: "25px" }}>
        <h3>Live Incident Feed</h3>

        <div className="grid-cards">

          {incidents.map((i, idx) => (
            <div key={idx} className="metric-card">

              <h3>{i.incident_type || "Incident"}</h3>

              <p><b>Severity:</b> {i.severity}</p>
              <p><b>Status:</b> {i.status}</p>
              <p><b>Signal ID:</b> {i.signal_id}</p>
              <p><b>Time:</b> {i.created_at || "N/A"}</p>

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

export default IncidentsView;