import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { name: "Critical", value: 4 },
  { name: "High", value: 7 },
  { name: "Medium", value: 5 },
  { name: "Low", value: 2 }
];

// Command center severity colors
const COLORS = [
  "#ef4444", // Critical - Red
  "#f97316", // High - Orange
  "#facc15", // Medium - Yellow
  "#22c55e"  // Low - Green
];

const IncidentChart = () => {
  return (
    <div className="panel">
      <h2>Incidents</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default IncidentChart;