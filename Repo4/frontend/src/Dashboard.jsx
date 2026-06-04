import React, { useEffect, useState } from "react";
import { getZones, triggerExecution } from "./api";
import ZoneCard from "./ZoneCard";

const Dashboard = () => {
  const [zones, setZones] = useState([]);

  // global message (system-level feedback)
  const [message, setMessage] = useState("");

  // loading state (optional but useful)
  const [loading, setLoading] = useState(false);

  // ===============================
  // 🔁 FETCH ZONES FROM BACKEND
  // ===============================
  const fetchZones = async () => {
    try {
      const res = await getZones();
      setZones(res.data);
    } catch (err) {
      setMessage("❌ Failed to fetch zones");
    }
  };

  // ===============================
  // 🚀 AUTO REFRESH SYSTEM
  // ===============================
  useEffect(() => {
    fetchZones();

    const interval = setInterval(() => {
      fetchZones();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ===============================
  // 🔥 EXECUTION TRIGGER FUNCTION
  // ===============================
  const handleExecute = async (trace_id, decision_type) => {
    try {
      setLoading(true);
      setMessage("⏳ Executing action...");

      const payload = {
        trace_id,
        action: "INCREASE_SIGNAL_TIME",
        decision_type
      };

      const res = await triggerExecution(payload);

      // 🔥 show full backend response
      setMessage(
        JSON.stringify(
          {
            trace_id: res.data.trace_id,
            status: res.data.status,
            response: res.data.response
          },
          null,
          2
        )
      );

      return res.data; // important for ZoneCard

    } catch (err) {
      const error = {
        status: "error",
        message: err.message
      };

      setMessage(JSON.stringify(error, null, 2));

      return error;
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // 🖥 UI RENDER
  // ===============================
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      
      {/* TITLE */}
      <h1>🚦 Zone Intelligence Dashboard</h1>

      {/* GLOBAL STATUS PANEL */}
      {message && (
        <pre
          style={{
            background: "#111",
            color: "#0f0",
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
            overflowX: "auto"
          }}
        >
          {message}
        </pre>
      )}

      {/* LOADING STATE */}
      {loading && <p>⏳ Processing execution...</p>}

      {/* ZONE LIST */}
      <div>
        {zones.map((zone) => (
          <ZoneCard
            key={zone.zone_id}
            zone={zone}
            onExecute={handleExecute}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;