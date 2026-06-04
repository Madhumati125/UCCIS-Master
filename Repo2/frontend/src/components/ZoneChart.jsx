import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts";

const ZoneChart = () => {

  const data = [
    { v: 40 }, { v: 55 }, { v: 65 }, { v: 70 }, { v: 80 }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line type="monotone" dataKey="v" stroke="#4ade80" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ZoneChart;