import { useEffect, useState } from "react";
import EscalationChart from "../Charts/EscalationChart";

const EscalationView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/escalations")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => setData(null));
  }, []);

  const escalations = data?.data || [];

  return (
    <div className="panel">

      {/* ================= HEADER ================= */}
      <h2>Escalations Command Center</h2>

      <p style={{ fontSize: "13px", color: "#cbd5e1" }}>
        Escalations represent incidents that require higher-level attention or automated intervention.
        This module tracks escalation triggers, severity routing, and operational decisions.
      </p>

      {/* ================= KPI CARDS ================= */}
      <div className="metrics-grid" style={{ marginTop: "15px" }}>

        <div className="metric-card">
          <h3>Total Escalations</h3>
          <h2>{escalations.length}</h2>
        </div>

        <div className="metric-card">
          <h3>Pending</h3>
          <h2>
            {escalations.filter(e => e.status === "PENDING").length}
          </h2>
        </div>

        <div className="metric-card">
          <h3>Resolved</h3>
          <h2>
            {escalations.filter(e => e.status === "RESOLVED").length}
          </h2>
        </div>

        <div className="metric-card">
          <h3>Critical</h3>
          <h2>
            {escalations.filter(e => e.priority === "CRITICAL").length}
          </h2>
        </div>

      </div>

      {/* ================= BAR CHART ================= */}
      <div style={{ marginTop: "25px" }}>
        <h3>Escalation Trend</h3>

        <EscalationChart />
      </div>

      {/* ================= ESCALATION CARDS ================= */}
      <div style={{ marginTop: "25px" }}>
        <h3>Live Escalation Feed</h3>

        <div className="grid-cards">

          {escalations.map((e, idx) => (
            <div key={idx} className="metric-card">

              <h3>{e.escalation_type || "Escalation"}</h3>

              <p><b>Status:</b> {e.status}</p>
              <p><b>Priority:</b> {e.priority}</p>
              <p><b>Incident ID:</b> {e.incident_id}</p>
              <p><b>Time:</b> {e.created_at || "N/A"}</p>

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

export default EscalationView;