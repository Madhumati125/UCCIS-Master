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

function Signals() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/signals")
      .then((res) => {
        setSignals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const statusData = [
    {
      name: "Active",
      value: 14
    },
    {
      name: "Resolved",
      value: 8
    },
    {
      name: "Pending",
      value: 2
    }
  ];

  const priorityData = [
    {
      name: "Critical",
      value: 6
    },
    {
      name: "High",
      value: 10
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
    "#2563eb",
    "#dc2626",
    "#16a34a",
    "#f59e0b"
  ];

  return (
    <div>
      <h1>Signal Operations Center</h1>

      <div className="cards-container">
        <div className="card signal-card">
          <h3>Total Signals</h3>
          <h2>24</h2>
        </div>

        <div className="card incident-card">
          <h3>Active Signals</h3>
          <h2>14</h2>
        </div>

        <div className="card escalation-card">
          <h3>Resolved</h3>
          <h2>8</h2>
        </div>

        <div className="card replay-card">
          <h3>Pending</h3>
          <h2>2</h2>
        </div>
      </div>

      <div className="chart-row">

        <div className="chart-card">
          <h2>Signal Status Distribution</h2>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={statusData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="value" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Signal Priority Distribution</h2>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={priorityData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {priorityData.map(
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

              <Legend />

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>Signal Information</h2>

          <p>
            Signal ingestion layer monitors
            incoming operational events.
          </p>

          <p>
            Signals are correlated with
            telemetry and incidents.
          </p>

          <p>
            Trace IDs allow complete
            runtime reconstruction.
          </p>

          <p>
            Current Runtime Health: 98%
          </p>
        </div>

        <div className="dashboard-card">
          <h2>Recent Signal Activity</h2>

          <ul>
            <li>
              SIG-1001 → Flood Alert
            </li>

            <li>
              SIG-1002 → Traffic Congestion
            </li>

            <li>
              SIG-1003 → Medical Emergency
            </li>

            <li>
              SIG-1004 → Water Leakage
            </li>

            <li>
              SIG-1005 → Cyber Intrusion
            </li>
          </ul>
        </div>
      </div>

      <div className="chart-card">
        <h2>Backend Response</h2>

        <table>
          <thead>
            <tr>
              <th>Signal ID</th>
              <th>Trace ID</th>
              <th>Status</th>
              <th>Domain</th>
            </tr>
          </thead>

          <tbody>
            {signals.length > 0 ? (
              signals.map((signal) => (
                <tr key={signal.id}>
                  <td>{signal.id}</td>

                  <td>
                    {signal.traceId}
                  </td>

                  <td>
                    {signal.status}
                  </td>

                  <td>
                    {signal.domain}
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
                  Loading Signals...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Signals;