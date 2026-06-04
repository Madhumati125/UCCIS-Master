import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { time: "12 PM", high: 2 },
  { time: "2 PM", high: 3 },
  { time: "4 PM", high: 2 },
  { time: "6 PM", high: 4 },
  { time: "8 PM", high: 3 }
];

function EscalationChart() {

  return (

    <div className="chart-box">

      <h2>
        Escalation Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={250}
      >

        <LineChart data={data}>

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="high"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default EscalationChart;