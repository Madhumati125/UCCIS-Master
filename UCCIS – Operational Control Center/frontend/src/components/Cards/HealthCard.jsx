import { useEffect, useState } from "react";

const HealthCard = () => {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then(res => res.json())
      .then(res => setHealth(res))
      .catch(() => setHealth(null));
  }, []);

  const isActive =
    health?.backend === "ONLINE" &&
    health?.database === "CONNECTED" &&
    health?.runtime === "ACTIVE";

  return (
    <div className="metric-card">

      <h3>System Health</h3>

      <h2>
        {health ? (
          isActive ? "🟢 ONLINE" : "🔴 DEGRADED"
        ) : (
          "⏳ LOADING"
        )}
      </h2>

      <p>Backend: {health?.backend || "UNKNOWN"}</p>
      <p>Database: {health?.database || "UNKNOWN"}</p>
      <p>Runtime: {health?.runtime || "UNKNOWN"}</p>

    </div>
  );
};

export default HealthCard;