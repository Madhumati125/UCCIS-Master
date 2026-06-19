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
  Legend
} from "recharts";

function Analytics() {
  const domainPerformance = [
    {
      domain: "Flood",
      score: 95
    },
    {
      domain: "Traffic",
      score: 91
    },
    {
      domain: "Medical",
      score: 89
    },
    {
      domain: "Power",
      score: 87
    },
    {
      domain: "Cyber",
      score: 84
    }
  ];

  const incidentTrend = [
    {
      month: "Jan",
      incidents: 24
    },
    {
      month: "Feb",
      incidents: 32
    },
    {
      month: "Mar",
      incidents: 28
    },
    {
      month: "Apr",
      incidents: 40
    },
    {
      month: "May",
      incidents: 35
    },
    {
      month: "Jun",
      incidents: 30
    }
  ];

  const rootCauseData = [
    {
      name: "Infrastructure",
      value: 35
    },
    {
      name: "Network",
      value: 25
    },
    {
      name: "Human Error",
      value: 20
    },
    {
      name: "Sensor Failure",
      value: 12
    },
    {
      name: "External Event",
      value: 8
    }
  ];

  const COLORS = [
    "#2563eb",
    "#dc2626",
    "#16a34a",
    "#f59e0b",
    "#7c3aed"
  ];

  return (
    <div>
      <h1>Analytics Intelligence Center</h1>

      <div className="cards-container">

        <div className="card signal-card">
          <h3>Operational Efficiency</h3>
          <h2>92%</h2>
        </div>

        <div className="card incident-card">
          <h3>Resolution Rate</h3>
          <h2>94%</h2>
        </div>

        <div className="card escalation-card">
          <h3>SLA Compliance</h3>
          <h2>96%</h2>
        </div>

        <div className="card replay-card">
          <h3>Prediction Accuracy</h3>
          <h2>89%</h2>
        </div>

      </div>

      <div className="chart-row">

        <div className="chart-card">
          <h2>Top Performing Domains</h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart
              data={domainPerformance}
            >
              <XAxis dataKey="domain" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="score">
                {domainPerformance.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Root Cause Analysis</h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>
              <Pie
                data={rootCauseData}
                dataKey="value"
                outerRadius={110}
                label
              >
                {rootCauseData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      <div className="chart-card">
        <h2>Monthly Incident Analytics</h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >
          <BarChart data={incidentTrend}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="incidents"
              fill="#2563eb"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>SLA Compliance</h2>

          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>SLA</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Flood Team</td>
                <td>98%</td>
              </tr>

              <tr>
                <td>Medical Team</td>
                <td>95%</td>
              </tr>

              <tr>
                <td>Traffic Team</td>
                <td>92%</td>
              </tr>

              <tr>
                <td>Cyber Team</td>
                <td>97%</td>
              </tr>

              <tr>
                <td>Power Team</td>
                <td>94%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dashboard-card">
          <h2>Predictive Insights</h2>

          <p>
            Current Month Incidents:
            <strong> 30</strong>
          </p>

          <p>
            Forecast Next Month:
            <strong> 36</strong>
          </p>

          <p>
            Predicted Growth:
            <strong> 20%</strong>
          </p>

          <p>
            Recommended Staffing:
            <strong> +3 Engineers</strong>
          </p>

          <p>
            Resource Utilization:
            <strong> 88%</strong>
          </p>
        </div>

      </div>

      <div className="chart-card">
        <h2>AI Recommendations</h2>

        <table>
          <thead>
            <tr>
              <th>Recommendation</th>
              <th>Priority</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                Improve flood sensor coverage
              </td>
              <td>High</td>
            </tr>

            <tr>
              <td>
                Increase cyber threat monitoring
              </td>
              <td>Critical</td>
            </tr>

            <tr>
              <td>
                Optimize traffic escalation routing
              </td>
              <td>Medium</td>
            </tr>

            <tr>
              <td>
                Reduce incident response delay
              </td>
              <td>High</td>
            </tr>

            <tr>
              <td>
                Expand replay retention policy
              </td>
              <td>Medium</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Analytics;