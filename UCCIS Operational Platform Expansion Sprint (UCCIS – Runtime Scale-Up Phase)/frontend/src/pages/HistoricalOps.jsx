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

function HistoricalOps() {

  const yearlyIncidents = [
    { year: "2021", count: 120 },
    { year: "2022", count: 145 },
    { year: "2023", count: 180 },
    { year: "2024", count: 210 },
    { year: "2025", count: 240 }
  ];

  const archiveDistribution = [
    {
      name: "Flood",
      value: 35
    },
    {
      name: "Traffic",
      value: 25
    },
    {
      name: "Medical",
      value: 20
    },
    {
      name: "Power",
      value: 12
    },
    {
      name: "Cyber",
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
      <h1>Historical Operations Center</h1>

      <div className="cards-container">

        <div className="card signal-card">
          <h3>Archived Incidents</h3>
          <h2>895</h2>
        </div>

        <div className="card incident-card">
          <h3>Historical Traces</h3>
          <h2>1,245</h2>
        </div>

        <div className="card escalation-card">
          <h3>Replay Archives</h3>
          <h2>642</h2>
        </div>

        <div className="card replay-card">
          <h3>Evidence Records</h3>
          <h2>3,215</h2>
        </div>

      </div>

      <div className="chart-row">

        <div className="chart-card">
          <h2>Yearly Incident History</h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart data={yearlyIncidents}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="count"
                fill="#2563eb"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Historical Domain Distribution</h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>
              <Pie
                data={archiveDistribution}
                dataKey="value"
                outerRadius={110}
                label
              >
                {archiveDistribution.map(
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

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>Historical Summary</h2>

          <p>
            Historical operations maintain
            complete archives of incidents,
            traces, escalations, replay data,
            and evidence records.
          </p>

          <p>
            Archive Retention:
            <strong> 5 Years</strong>
          </p>

          <p>
            Trace Recovery Rate:
            <strong> 99%</strong>
          </p>

          <p>
            Evidence Integrity:
            <strong> 100%</strong>
          </p>

          <p>
            Replay Availability:
            <strong> 97%</strong>
          </p>
        </div>

        <div className="dashboard-card">
          <h2>Major Historical Events</h2>

          <ul>
            <li>2021 Flood Emergency</li>
            <li>2022 Traffic System Failure</li>
            <li>2023 Regional Power Outage</li>
            <li>2024 Medical Crisis Response</li>
            <li>2025 Cyber Security Incident</li>
          </ul>
        </div>

      </div>

      <div className="chart-card">
        <h2>Historical Performance Metrics</h2>

        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Total Archived Incidents</td>
              <td>895</td>
            </tr>

            <tr>
              <td>Historical Traces</td>
              <td>1,245</td>
            </tr>

            <tr>
              <td>Replay Archives</td>
              <td>642</td>
            </tr>

            <tr>
              <td>Evidence Records</td>
              <td>3,215</td>
            </tr>

            <tr>
              <td>Archive Recovery Rate</td>
              <td>99%</td>
            </tr>

            <tr>
              <td>Data Integrity</td>
              <td>100%</td>
            </tr>

            <tr>
              <td>Retention Coverage</td>
              <td>5 Years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="chart-card">
        <h2>Historical Timeline</h2>

        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Key Event</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>2021</td>
              <td>Major Flood Response</td>
            </tr>

            <tr>
              <td>2022</td>
              <td>Traffic Infrastructure Upgrade</td>
            </tr>

            <tr>
              <td>2023</td>
              <td>Regional Power Restoration</td>
            </tr>

            <tr>
              <td>2024</td>
              <td>Medical Emergency Coordination</td>
            </tr>

            <tr>
              <td>2025</td>
              <td>Cyber Security Recovery Program</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default HistoricalOps;