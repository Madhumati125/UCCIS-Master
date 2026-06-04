import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function TelemetryChart() {
  // 🔥 HARD-CODED SAFE DATA (ENSURES CHART ALWAYS SHOWS)
  const data = [
    { name: "T1", value: 20 },
    { name: "T2", value: 45 },
    { name: "T3", value: 30 },
    { name: "T4", value: 70 },
    { name: "T5", value: 55 },
    { name: "T6", value: 80 },
  ];

  return (
    <div style={{ width: "100%", height: "320px" }}>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#00d4ff"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </div>
  );
}