import { useEffect, useState } from "react";
import API from "../api";

import StatCard from "../components/StatCard.jsx";
import TelemetryChart from "../components/TelemetryChart.jsx";

export default function Telemetry() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/api/telemetry").then(res => setData(res.data));
  }, []);

  return (
    <div className="page">
      <h1>📡 Telemetry Phase</h1>

      <div className="grid">
        <StatCard title="Total Signals" value={data.length} />
        <StatCard title="Active Systems" value={3} />
        <StatCard title="Status" value="LIVE" />
      </div>

      <TelemetryChart data={data} />

      <div className="card">
        <h3>Raw Backend Response</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}