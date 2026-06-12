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
  { type: "Flood", value: 8 },
  { type: "Traffic", value: 5 },
  { type: "Cyber", value: 3 },
  { type: "Medical", value: 6 }
];

// Command center color palette
const COLORS = [
  "#ef4444", // flood - red (critical)
  "#f97316", // traffic - orange
  "#8b5cf6", // cyber - purple
  "#06b6d4"  // medical - cyan
];

const SignalChart = () => {
  return (
    <div className="panel">
      <h2>Signals</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>

          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default SignalChart;