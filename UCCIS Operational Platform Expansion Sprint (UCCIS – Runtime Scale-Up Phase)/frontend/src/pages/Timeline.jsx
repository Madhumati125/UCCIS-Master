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

function Timeline() {
  const timelineData = [
    {
      name: "Signals",
      value: 24
    },
    {
      name: "Incidents",
      value: 18
    },
    {
      name: "Escalations",
      value: 12
    },
    {
      name: "Replay",
      value: 8
    },
    {
      name: "Evidence",
      value: 15
    }
  ];

  const stageData = [
    {
      name: "Completed",
      value: 60
    },
    {
      name: "Running",
      value: 25
    },
    {
      name: "Pending",
      value: 15
    }
  ];

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#f59e0b"
  ];

  return (
    <div>
      <h1>Timeline Operations Center</h1>

      <div className="cards-container">

        <div className="card signal-card">
          <h3>Total Events</h3>
          <h2>77</h2>
        </div>

        <div className="card incident-card">
          <h3>Completed</h3>
          <h2>60</h2>
        </div>

        <div className="card escalation-card">
          <h3>Running</h3>
          <h2>25</h2>
        </div>

        <div className="card replay-card">
          <h3>Pending</h3>
          <h2>15</h2>
        </div>

      </div>

      <div className="chart-row">

        <div className="chart-card">
          <h2>Timeline Event Distribution</h2>

          <ResponsiveContainer
            width="100%"
            height={320}
          >
            <BarChart data={timelineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="value"
                fill="#2563eb"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Timeline Status</h2>

          <ResponsiveContainer
            width="100%"
            height={320}
          >
            <PieChart>
              <Pie
                data={stageData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {stageData.map(
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
          <h2>Timeline Information</h2>

          <p>
            Timeline provides complete
            operational visibility across
            runtime events.
          </p>

          <p>
            Every event is linked using
            Trace IDs.
          </p>

          <p>
            Timeline enables replay and
            evidence reconstruction.
          </p>

          <p>
            Event Correlation Accuracy:
            <strong> 98%</strong>
          </p>

          <p>
            Runtime Coverage:
            <strong> 100%</strong>
          </p>
        </div>

        <div className="dashboard-card">
          <h2>Recent Timeline Events</h2>

          <ul>
            <li>09:00 - Signal Generated</li>
            <li>09:03 - Telemetry Recorded</li>
            <li>09:05 - Incident Created</li>
            <li>09:08 - Escalation Triggered</li>
            <li>09:12 - Replay Generated</li>
            <li>09:15 - Evidence Stored</li>
          </ul>
        </div>

      </div>

      <div className="chart-card">
        <h2>Timeline Performance Metrics</h2>

        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Total Events</td>
              <td>77</td>
            </tr>

            <tr>
              <td>Signals</td>
              <td>24</td>
            </tr>

            <tr>
              <td>Incidents</td>
              <td>18</td>
            </tr>

            <tr>
              <td>Escalations</td>
              <td>12</td>
            </tr>

            <tr>
              <td>Replay Events</td>
              <td>8</td>
            </tr>

            <tr>
              <td>Evidence Records</td>
              <td>15</td>
            </tr>

            <tr>
              <td>Runtime Health</td>
              <td>98%</td>
            </tr>

            <tr>
              <td>Correlation Accuracy</td>
              <td>99%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="chart-card">
        <h2>Timeline Workflow</h2>

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
              <td>Telemetry</td>
              <td>Runtime Metrics Captured</td>
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
              <td>Replay Created</td>
            </tr>

            <tr>
              <td>Evidence</td>
              <td>Evidence Stored</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Timeline;