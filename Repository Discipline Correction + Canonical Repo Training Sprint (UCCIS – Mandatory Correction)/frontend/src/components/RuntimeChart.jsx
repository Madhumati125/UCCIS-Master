import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function RuntimeChart({ data }) {
  return (
    <div className="card">
      <h3>📊 Logs by Module</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="module" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4f9cff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}