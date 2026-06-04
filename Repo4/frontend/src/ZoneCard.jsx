import React, { useState } from "react";

const ZoneCard = ({ zone, onExecute }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setResponse(null);

    const res = await onExecute(
      zone.trace_id,
      zone.decision_type
    );

    setResponse(res);
    setLoading(false);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 15,
        margin: 10,
        backgroundColor:
          zone.decision_type === "HIGH_PRIORITY"
            ? "#ffe5e5"
            : zone.decision_type === "MEDIUM"
            ? "#fff7d6"
            : "#e6ffe6"
      }}
    >
      {/* 🧠 ZONE ID */}
      <h3>{zone.zone_id}</h3>

      {/* ⚠️ RISK */}
      <p>
        <strong>Risk Score:</strong> {zone.risk_score}
      </p>

      {/* 🎯 DECISION */}
      <p>
        <strong>Decision:</strong> {zone.decision_type}
      </p>

      {/* 🔘 ACTION BUTTON */}
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Executing..." : "Trigger Action"}
      </button>

      {/* 📡 RESPONSE */}
      {response && (
        <pre
          style={{
            marginTop: 10,
            background: "#111",
            color: "#0f0",
            padding: 10,
            fontSize: 12,
            borderRadius: 5
          }}
        >
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default ZoneCard;