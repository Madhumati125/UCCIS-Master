import React from "react";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Flooding",
    value: 170
  },
  {
    name: "Traffic",
    value: 80
  },
  {
    name: "Waste",
    value: 30
  },
  {
    name: "Complaints",
    value: 20
  }
];

function DomainPieChart() {

  return (

    <div className="chart-box">

      <h2>
        Domain Priority
      </h2>

      <ResponsiveContainer
        width="100%"
        height={250}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
          />

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default DomainPieChart;