import { useEffect, useState } from "react";
import API from "../api";

import StatCard from "../components/StatCard.jsx";
import ReplayChart from "../components/ReplayChart.jsx";
import ReplayEvents from "../components/ReplayEvents.jsx";

export default function Replay() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    API.get("/api/runtime")
      .then((res) => setLogs(res.data || []))
      .catch((err) => console.log(err));
  }, []);

  const normalize = (v) => (v || "").toLowerCase();

  const errors = logs.filter(l =>
    normalize(l.level).includes("error")
  ).length;

  const warnings = logs.filter(l =>
    normalize(l.level).includes("warn")
  ).length;

  const info = logs.filter(l =>
    normalize(l.level).includes("info")
  ).length;

  // 🔁 IMPORTANT: module aggregation for PIE
  const pieData = Object.values(
    logs.reduce((acc, log) => {
      const key = log.module;

      if (!acc[key]) {
        acc[key] = { module: key, count: 0 };
      }

      acc[key].count++;
      return acc;
    }, {})
  );

  return (
    <div className="page">
      <h1>🔁 Replay Phase</h1>

      <div className="grid">
        <StatCard title="Errors" value={errors} />
        <StatCard title="Warnings" value={warnings} />
        <StatCard title="Info" value={info} />
        <StatCard title="Total" value={logs.length} />
      </div>

      <ReplayChart data={pieData} />

      <ReplayEvents data={logs} />
    </div>
  );
}