import React, { useEffect, useState } from "react";
import { getZones, sendDecisionRequest } from "../services/api";
import ZoneCard from "../components/ZoneCard";
import ZoneMap from "../components/ZoneMap";

const Dashboard = () => {

  const [zones, setZones] = useState([]);

  useEffect(() => {
    getZones().then(res => setZones(res.data));
  }, []);

  const handleAction = (zoneId) => {

    const request = {
      action: "DEPLOY_TRAFFIC",
      zone_id: zoneId,
      trace_id: Date.now().toString()
    };

    // Step 1 → Sending + show details
    setZones(prev =>
      prev.map(z =>
        z.id === zoneId
          ? {
              ...z,
              isLoading: true,
              requestStatus: "Sending...",
              showDetails: true
            }
          : z
      )
    );

    sendDecisionRequest(request)
      .then(res => {
        setZones(prev =>
          prev.map(z =>
            z.id === zoneId
              ? {
                  ...z,
                  isLoading: false,
                  requestStatus:
                    res.data.status === "APPROVED"
                      ? "✅ Approved"
                      : "❌ Rejected",
                  status:
                    res.data.status === "APPROVED"
                      ? "GREEN"
                      : z.status
                }
              : z
          )
        );
      })
      .catch(() => {
        setZones(prev =>
          prev.map(z =>
            z.id === zoneId
              ? {
                  ...z,
                  isLoading: false,
                  requestStatus: "⚠️ Error"
                }
              : z
          )
        );
      });
  };

  return (
    <div style={{
      background: "#0f172a",
      minHeight: "100vh",
      padding: "20px",
      color: "white"
    }}>

      <h1 style={{ textAlign: "center" }}>🚦 Traffic Dashboard</h1>

      <ZoneMap zones={zones} />

      <div style={{
        display: "flex",
        gap: "15px",
        marginTop: "20px"
      }}>
        {zones.slice(0, 5).map(zone => (
          <ZoneCard
            key={zone.id}
            zone={zone}
            onAction={handleAction}
          />
        ))}
      </div>

    </div>
  );
};

export default Dashboard;