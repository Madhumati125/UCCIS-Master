import { useEffect, useState } from "react";

const TopMetrics = () => {
  const [stats, setStats] = useState({
    health: "ONLINE",
    signals: 0,
    incidents: 0,
    escalations: 0
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          health: data.systemHealth || "ONLINE",
          signals: data.activeSignals || 0,
          incidents: data.activeIncidents || 0,
          escalations: data.escalations || 0
        });
      })
      .catch(() => {});
  }, []);

  return (
    <div className="metrics-grid">

      <div className="metric-card">
        <h3>System Health</h3>
        <h2>{stats.health}</h2>
      </div>

      <div className="metric-card">
        <h3>Active Signals</h3>
        <h2>{stats.signals}</h2>
      </div>

      <div className="metric-card">
        <h3>Incidents</h3>
        <h2>{stats.incidents}</h2>
      </div>

      <div className="metric-card">
        <h3>Escalations</h3>
        <h2>{stats.escalations}</h2>
      </div>

    </div>
  );
};

export default TopMetrics;