import { useState } from "react";
import axios from "axios";

import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import DonutChart from "./charts/DonutChart";

function Dashboard() {
  const [data, setData] = useState(null);

  /**
   * RUN INTELLIGENCE ENGINE
   */
  const runEngine = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/intelligence-run"
      );
      setData(res.data.snapshot);
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* BUTTON */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={runEngine}>
          Run Intelligence Engine
        </button>
      </div>

      {/* ================= ZONE RENDERING ================= */}
      {data &&
        Object.keys(data.zones || {}).map((zoneKey) => {
          const zoneData = data.zones[zoneKey] || [];

          return (
            <div
              key={zoneKey}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                marginBottom: "20px",
                background: "#f9f9f9",
              }}
            >
              <h3>Zone: {zoneKey}</h3>

              {/* ================= TOP ROW ================= */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: "300px" }}>
                  <BarChart data={zoneData} />
                </div>

                <div style={{ flex: 1, minWidth: "300px" }}>
                  <LineChart data={zoneData} />
                </div>
              </div>

              {/* ================= BOTTOM ROW (SMALL CHARTS) ================= */}
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "40px",
                  flexWrap: "wrap",
                }}
              >
                {/* PIE */}
                <div
                  style={{
                    width: "300px",
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <PieChart data={zoneData} />
                </div>

                {/* DONUT */}
                <div
                  style={{
                    width: "300px",
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <DonutChart data={zoneData} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Dashboard;