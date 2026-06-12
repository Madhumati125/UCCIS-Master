import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { day: "Mon", escalations: 1 },
  { day: "Tue", escalations: 2 },
  { day: "Wed", escalations: 4 },
  { day: "Thu", escalations: 3 },
  { day: "Fri", escalations: 5 },
  { day: "Sat", escalations: 2 },
  { day: "Sun", escalations: 1 }
];

// Different color per bar (important fix)
const COLORS = [
  "#22c55e", // green
  "#facc15", // yellow
  "#f97316", // orange
  "#ef4444", // red
  "#8b5cf6", // purple
  "#06b6d4", // cyan
  "#3b82f6"  // blue
];

const EscalationChart = () => {
  return (
    <div className="panel">
      <h2>Escalations</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>

          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="escalations">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EscalationChart;