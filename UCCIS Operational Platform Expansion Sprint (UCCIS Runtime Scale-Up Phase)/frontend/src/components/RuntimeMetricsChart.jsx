import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell
} from "recharts";

export default function RuntimeMetricsChart({
  stats
}) {
  const data = [
    {
      name: "Signals",
      value: stats.activeSignals
    },
    {
      name: "Incidents",
      value: stats.incidents
    },
    {
      name: "Escalations",
      value: stats.escalations
    },
    {
      name: "Traces",
      value: stats.traces
    }
  ];

  return (
    <div className="chart-box">
      <h2>Runtime Metrics</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value">
            {data.map((entry, index) => {
              let color = "#2563EB";

              if (
                entry.name === "Signals"
              ) {
                color = "#2563EB"; // Blue
              }

              if (
                entry.name === "Incidents"
              ) {
                color = "#F59E0B"; // Orange
              }

              if (
                entry.name === "Escalations"
              ) {
                color = "#DC2626"; // Red
              }

              if (
                entry.name === "Traces"
              ) {
                color = "#8B5CF6"; // Purple
              }

              return (
                <Cell
                  key={`cell-${index}`}
                  fill={color}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}