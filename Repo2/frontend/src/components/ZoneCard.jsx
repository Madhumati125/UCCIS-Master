import React from "react";
import ZoneChart from "./ZoneChart";

const ZoneCard = ({ zone, onAction }) => {

  const getColor = () => {
    if (zone.status === "RED") return "#ff4d4f";
    if (zone.status === "YELLOW") return "#faad14";
    return "#52c41a";
  };

  return (
    <div style={{
      flex: "1",
      minWidth: "180px",
      padding: "15px",
      borderRadius: "12px",
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(10px)",
      border: `1px solid ${getColor()}`
    }}>

      <h3>{zone.name}</h3>
      <div style={{ color: getColor(), fontWeight: "600" }}>
        {zone.status}
      </div>

      <p>🚗 Traffic: {zone.traffic_density}</p>
      <p>⚠️ Violations: {zone.violation_count}</p>
      <p>📈 Congestion: {zone.congestion_level}</p>

      <div style={{ height: "80px", pointerEvents: "none" }}>
        <ZoneChart />
      </div>

      <button
        onClick={() => onAction(zone.id)}
        disabled={zone.isLoading}
        style={{
          marginTop: "10px",
          padding: "8px",
          width: "100%",
          borderRadius: "8px",
          border: "none",
          background: zone.isLoading
            ? "#444"
            : "linear-gradient(135deg, #1677ff, #69c0ff)",
          color: "white"
        }}
      >
        {zone.isLoading ? "Processing..." : "Deploy Traffic"}
      </button>

      {zone.requestStatus && (
        <p>{zone.requestStatus}</p>
      )}

      {/* 🔥 DETAILS */}
      {zone.showDetails && (
        <div style={{
          marginTop: "10px",
          padding: "10px",
          background: "rgba(0,0,0,0.4)",
          borderRadius: "8px"
        }}>

          <strong>Metrics:</strong>
          <div>Traffic: {zone.traffic_density}</div>
          <div>Violations: {zone.violation_count}</div>
          <div>Congestion: {zone.congestion_level}</div>

          <div style={{ marginTop: "5px" }}>
            <strong>Reason:</strong>
            <ul style={{ paddingLeft: "15px" }}>
              {zone.traffic_density > 70 && <li>traffic high</li>}
              {zone.traffic_density > 50 && zone.traffic_density <= 70 && <li>traffic moderate</li>}
              {zone.traffic_density <= 50 && <li>traffic low</li>}

              {zone.violation_count > 10 && <li>violations high</li>}
              {zone.violation_count > 5 && zone.violation_count <= 10 && <li>violations moderate</li>}
              {zone.violation_count <= 5 && <li>violations low</li>}

              {zone.trend === "increasing" && <li>trend increasing</li>}
            </ul>
          </div>

          <div style={{ color: "#ff4d4f" }}>
            <strong>Alert:</strong>
            {zone.traffic_density > 70 && <div>HIGH_TRAFFIC — {zone.name}</div>}
            {zone.traffic_density > 50 && zone.traffic_density <= 70 && <div>MEDIUM_TRAFFIC — {zone.name}</div>}
            {zone.traffic_density <= 50 && <div>LOW_TRAFFIC — {zone.name}</div>}
          </div>

          <div style={{ color: "#69c0ff" }}>
            <strong>Recommendation:</strong>
            <div>Increase signal timing / deploy traffic police</div>
          </div>

        </div>
      )}

    </div>
  );
};

export default ZoneCard;