import {
  PieChart,
  Pie,
  Tooltip
} from "recharts";

const TelemetryChart = ({ data }) => {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
      />
      <Tooltip />
    </PieChart>
  );
};

export default TelemetryChart;