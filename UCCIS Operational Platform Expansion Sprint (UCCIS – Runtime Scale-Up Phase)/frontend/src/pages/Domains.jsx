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

function Domains() {

  const healthData = [
    { name: "Flood", score: 98 },
    { name: "Traffic", score: 94 },
    { name: "Medical", score: 96 },
    { name: "Power", score: 91 },
    { name: "Cyber", score: 89 }
  ];

  const resourceData = [
    { name: "Flood", value: 25 },
    { name: "Traffic", value: 20 },
    { name: "Medical", value: 22 },
    { name: "Power", value: 18 },
    { name: "Cyber", value: 15 }
  ];

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#dc2626",
    "#f59e0b",
    "#7c3aed"
  ];

  return (
    <div>

      <h1>Domain Intelligence Center</h1>

      <div className="cards-container">

        <div className="card signal-card">
          <h3>Active Domains</h3>
          <h2>5</h2>
        </div>

        <div className="card incident-card">
          <h3>Avg Health</h3>
          <h2>94%</h2>
        </div>

        <div className="card escalation-card">
          <h3>Resources</h3>
          <h2>100+</h2>
        </div>

        <div className="card replay-card">
          <h3>Risk Alerts</h3>
          <h2>12</h2>
        </div>

      </div>

      <div className="chart-row">

        <div className="chart-card">
          <h2>Domain Health Score</h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={healthData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="score">
                {healthData.map((item, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

        </div>

        <div className="chart-card">
          <h2>Resource Allocation</h2>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>

              <Pie
                data={resourceData}
                dataKey="value"
                outerRadius={110}
                label
              >
                {resourceData.map((item, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>Domain Operational Summary</h2>

          <p>
            Flood Management domain
            currently has the highest
            operational health score.
          </p>

          <p>
            Medical Response domain
            maintains the fastest
            response times.
          </p>

          <p>
            Cyber Security domain
            recorded the highest
            threat volume this month.
          </p>

          <p>
            Power Monitoring domain
            reported the fewest incidents.
          </p>

        </div>

        <div className="dashboard-card">

          <h2>Risk Analysis</h2>

          <ul>
            <li>Flood Risk : Medium</li>
            <li>Traffic Risk : Low</li>
            <li>Medical Risk : Low</li>
            <li>Power Risk : Medium</li>
            <li>Cyber Risk : High</li>
          </ul>

        </div>

      </div>

      <div className="chart-card">

        <h2>Domain Leaders</h2>

        <table>

          <thead>
            <tr>
              <th>Domain</th>
              <th>Lead Team</th>
              <th>Health Score</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Flood</td>
              <td>Hydrology Unit</td>
              <td>98%</td>
            </tr>

            <tr>
              <td>Traffic</td>
              <td>Mobility Command</td>
              <td>94%</td>
            </tr>

            <tr>
              <td>Medical</td>
              <td>Emergency Response</td>
              <td>96%</td>
            </tr>

            <tr>
              <td>Power</td>
              <td>Grid Operations</td>
              <td>91%</td>
            </tr>

            <tr>
              <td>Cyber</td>
              <td>Security Operations</td>
              <td>89%</td>
            </tr>

          </tbody>

        </table>

      </div>

      <div className="chart-card">

        <h2>Strategic Recommendations</h2>

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
                Expand cyber monitoring coverage
              </td>
              <td>High</td>
            </tr>

            <tr>
              <td>
                Increase flood sensor density
              </td>
              <td>Medium</td>
            </tr>

            <tr>
              <td>
                Optimize traffic routing models
              </td>
              <td>Medium</td>
            </tr>

            <tr>
              <td>
                Upgrade power anomaly detection
              </td>
              <td>High</td>
            </tr>

            <tr>
              <td>
                Improve emergency dispatch automation
              </td>
              <td>Critical</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Domains;