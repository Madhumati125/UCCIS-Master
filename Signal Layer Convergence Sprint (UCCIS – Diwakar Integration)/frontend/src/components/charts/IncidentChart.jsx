import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const IncidentChart = ({ incidents }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={incidents}>
        <XAxis dataKey="severity" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IncidentChart;