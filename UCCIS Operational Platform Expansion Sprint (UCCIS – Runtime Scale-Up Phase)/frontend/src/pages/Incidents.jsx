import { useEffect, useState } from "react";
import axios from "axios";
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

function Incidents() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/incidents")
      .then((res) => {
        setIncidents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const statusData = [
    {
      name: "Open",
      value: 18
    },
    {
      name: "Resolved",
      value: 10
    },
    {
      name: "Investigating",
      value: 6
    }
  ];

  const severityData = [
    {
      name: "Critical",
      value: 6
    },
    {
      name: "High",
      value: 8
    },
    {
      name: "Medium",
      value: 5
    },
    {
      name: "Low",
      value: 3
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
      <h1>Incident Operations Center</h1>

      <div className="cards-container">
        <div className="card incident-total-card">
          <h3>Total Incidents</h3>
          <h2>34</h2>
        </div>

        <div className="card incident-open-card">
          <h3>Open Incidents</h3>
          <h2>18</h2>
        </div>

        <div className="card incident-critical-card">
          <h3>Critical</h3>
          <h2>6</h2>
        </div>

        <div className="card incident-resolved-card">
          <h3>Resolved</h3>
          <h2>10</h2>
        </div>
      </div>

      <div className="chart-row">

        <div className="chart-card">
          <h2>Incident Status Distribution</h2>

          <ResponsiveContainer
            width="100%"
            height={320}
          >
            <BarChart data={statusData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="value"
                fill="#dc2626"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Incident Severity</h2>

          <ResponsiveContainer
            width="100%"
            height={320}
          >
            <PieChart>
              <Pie
                data={severityData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {severityData.map(
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
          <h2>Incident Information</h2>

          <p>
            Incidents are generated after
            signal correlation and runtime
            validation.
          </p>

          <p>
            Critical incidents trigger
            escalation workflows.
          </p>

          <p>
            Every incident is linked with
            a Trace ID.
          </p>

          <p>
            Incident Recovery Rate: 94%
          </p>
        </div>

        <div className="dashboard-card">
          <h2>Recent Incidents</h2>

          <ul>
            <li>
              INC-1001 → Flood Emergency
            </li>

            <li>
              INC-1002 → Traffic Blockage
            </li>

            <li>
              INC-1003 → Medical Alert
            </li>

            <li>
              INC-1004 → Cyber Attack
            </li>

            <li>
              INC-1005 → Power Failure
            </li>
          </ul>
        </div>
      </div>

      <div className="chart-card">
        <h2>Backend Response</h2>

        <table>
          <thead>
            <tr>
              <th>Incident ID</th>
              <th>Trace ID</th>
              <th>Status</th>
              <th>Severity</th>
            </tr>
          </thead>

          <tbody>
            {incidents.length > 0 ? (
              incidents.map((incident) => (
                <tr key={incident.id}>
                  <td>{incident.id}</td>

                  <td>
                    {incident.traceId}
                  </td>

                  <td>
                    {incident.status}
                  </td>

                  <td>
                    {incident.severity}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    textAlign: "center"
                  }}
                >
                  Loading Incidents...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Incidents;