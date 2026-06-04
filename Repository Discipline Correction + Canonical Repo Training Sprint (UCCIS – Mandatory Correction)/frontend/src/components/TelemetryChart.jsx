import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function TelemetryChart({ data }) {
  return (
    <div className="card">
      <h3>📊 Live Trend</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="signalId" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4f9cff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}