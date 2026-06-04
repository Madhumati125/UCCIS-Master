import { useEffect, useState } from "react";
import API from "../api";

import RuntimeLogs from "../components/RuntimeLogs.jsx";
import RuntimeChart from "../components/RuntimeChart.jsx";
import StatCard from "../components/StatCard.jsx";

export default function Runtime() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    API.get("/api/runtime").then((res) => setLogs(res.data));
  }, []);

  // 📊 compute stats
  const total = logs.length;
  const errors = logs.filter(l => l.level === "error").length;
  const warnings = logs.filter(l => l.level === "warn").length;
  const info = logs.filter(l => l.level === "info").length;

  // 📈 chart data (group by module)
  const chartData = Object.values(
    logs.reduce((acc, log) => {
      if (!acc[log.module]) {
        acc[log.module] = { module: log.module, count: 0 };
      }
      acc[log.module].count++;
      return acc;
    }, {})
  );

  return (
    <div className="page">
      <h1>🧾 Runtime Phase</h1>

      {/* 📊 STATS CARDS */}
      <div className="grid">
        <StatCard title="Total Logs" value={total} />
        <StatCard title="Errors" value={errors} />
        <StatCard title="Warnings" value={warnings} />
        <StatCard title="Info" value={info} />
      </div>

      {/* 📈 CHART */}
      <RuntimeChart data={chartData} />

      {/* 🧾 RAW LOG VIEW */}
      <RuntimeLogs data={logs} />

      {/* 🔥 BACKEND RESPONSE SECTION (ADDED) */}
      <div className="card">
        <h3>🧾 Backend Response</h3>

        <pre style={{
          background: "#0b0f1a",
          padding: "10px",
          borderRadius: "8px",
          overflowX: "auto",
          color: "#9ca3af"
        }}>
          {JSON.stringify(logs, null, 2)}
        </pre>
      </div>
    </div>
  );
}