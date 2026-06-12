import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { name: "Normal Load", value: 45 },
  { name: "High Load", value: 25 },
  { name: "Critical Load", value: 15 },
  { name: "Idle", value: 15 }
];

const COLORS = ["#22c55e", "#facc15", "#ef4444", "#60a5fa"];

const TelemetryChart = () => {
  return (
    <div className="panel">
      <h2>Telemetry</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default TelemetryChart;