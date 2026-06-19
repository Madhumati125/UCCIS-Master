import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Legend
} from "recharts";

function AnalyticsCharts() {
  const runtimeMetrics = [
    {
      name: "Signals",
      value: 24,
      color: "#2563eb"
    },
    {
      name: "Incidents",
      value: 18,
      color: "#dc2626"
    },
    {
      name: "Escalations",
      value: 6,
      color: "#f59e0b"
    },
    {
      name: "Replay",
      value: 12,
      color: "#16a34a"
    },
    {
      name: "Evidence",
      value: 30,
      color: "#7c3aed"
    }
  ];

  const domainData = [
    {
      name: "Flood",
      value: 20
    },
    {
      name: "Traffic",
      value: 15
    },
    {
      name: "Medical",
      value: 12
    },
    {
      name: "Power",
      value: 18
    },
    {
      name: "Cyber",
      value: 10
    },
    {
      name: "Water",
      value: 14
    }
  ];

  const weeklyTrendData = [
    {
      day: "Mon",
      events: 12,
      color: "#2563eb"
    },
    {
      day: "Tue",
      events: 18,
      color: "#dc2626"
    },
    {
      day: "Wed",
      events: 24,
      color: "#16a34a"
    },
    {
      day: "Thu",
      events: 20,
      color: "#f59e0b"
    },
    {
      day: "Fri",
      events: 32,
      color: "#7c3aed"
    },
    {
      day: "Sat",
      events: 28,
      color: "#0891b2"
    },
    {
      day: "Sun",
      events: 16,
      color: "#ec4899"
    }
  ];

  const pieColors = [
    "#2563eb",
    "#dc2626",
    "#16a34a",
    "#f59e0b",
    "#7c3aed",
    "#0891b2"
  ];

  return (
    <>
      <div className="chart-row">

        {/* Runtime Metrics */}

        <div className="chart-card">
          <h2>Runtime Metrics</h2>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={runtimeMetrics}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value">
                {runtimeMetrics.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.color}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Domain Distribution */}

        <div className="chart-card">
          <h2>Domain Distribution</h2>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={domainData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {domainData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      pieColors[
                        index % pieColors.length
                      ]
                    }
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Runtime Trend */}

      <div className="chart-card">
        <h2>Weekly Runtime Trend</h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={weeklyTrendData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar dataKey="events">
              {weeklyTrendData.map(
                (entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.color}
                  />
                )
              )}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default AnalyticsCharts;