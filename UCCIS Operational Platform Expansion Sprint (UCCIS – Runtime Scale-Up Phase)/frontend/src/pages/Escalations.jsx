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

function Escalations() {
  const statusData = [
    {
      name: "Open",
      value: 6
    },
    {
      name: "Assigned",
      value: 10
    },
    {
      name: "Resolved",
      value: 8
    }
  ];

  const priorityData = [
    {
      name: "Critical",
      value: 5
    },
    {
      name: "High",
      value: 8
    },
    {
      name: "Medium",
      value: 7
    },
    {
      name: "Low",
      value: 4
    }
  ];

  const COLORS = [
    "#dc2626",
    "#f59e0b",
    "#2563eb",
    "#16a34a"
  ];

  return (
    <div>
      <h1>Escalation Operations Center</h1>

      <div className="cards-container">

        <div className="card escalation-total-card">
          <h3>Total Escalations</h3>
          <h2>24</h2>
        </div>

        <div className="card escalation-open-card">
          <h3>Open Escalations</h3>
          <h2>6</h2>
        </div>

        <div className="card escalation-critical-card">
          <h3>Critical Escalations</h3>
          <h2>5</h2>
        </div>

        <div className="card escalation-resolved-card">
          <h3>Resolved Escalations</h3>
          <h2>8</h2>
        </div>

      </div>

      <div className="chart-row">

        <div className="chart-card">
          <h2>Escalation Status Distribution</h2>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={statusData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#f59e0b"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Priority Distribution</h2>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={priorityData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {priorityData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index % COLORS.length]
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

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>Escalation Information</h2>

          <p>
            Escalations are triggered when
            incidents exceed operational
            thresholds.
          </p>

          <p>
            Critical incidents are routed
            to specialized response teams.
          </p>

          <p>
            Every escalation maintains
            complete traceability.
          </p>

          <p>
            Average Response Time:
            <strong> 4.2 Minutes</strong>
          </p>

          <p>
            Escalation Success Rate:
            <strong> 96%</strong>
          </p>
        </div>

        <div className="dashboard-card">
          <h2>Recent Escalations</h2>

          <ul>
            <li>ESC-1001 → Flood Response Team</li>
            <li>ESC-1002 → Medical Operations</li>
            <li>ESC-1003 → Traffic Control Unit</li>
            <li>ESC-1004 → Cyber Security Team</li>
            <li>ESC-1005 → Power Restoration Team</li>
          </ul>
        </div>

      </div>

      <div className="chart-card">
        <h2>Escalation Performance Metrics</h2>

        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Total Escalations</td>
              <td>24</td>
            </tr>

            <tr>
              <td>Open Escalations</td>
              <td>6</td>
            </tr>

            <tr>
              <td>Critical Escalations</td>
              <td>5</td>
            </tr>

            <tr>
              <td>Resolved Escalations</td>
              <td>8</td>
            </tr>

            <tr>
              <td>Average Response Time</td>
              <td>4.2 Minutes</td>
            </tr>

            <tr>
              <td>Success Rate</td>
              <td>96%</td>
            </tr>

            <tr>
              <td>Runtime Health</td>
              <td>98%</td>
            </tr>

            <tr>
              <td>Active Teams</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="chart-card">
        <h2>Escalation Workflow</h2>

        <table>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Signal</td>
              <td>Operational Event Detected</td>
            </tr>

            <tr>
              <td>Incident</td>
              <td>Incident Generated</td>
            </tr>

            <tr>
              <td>Escalation</td>
              <td>Response Team Assigned</td>
            </tr>

            <tr>
              <td>Replay</td>
              <td>Operational Replay Generated</td>
            </tr>

            <tr>
              <td>Evidence</td>
              <td>Audit Trail Stored</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Escalations;