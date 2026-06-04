import "../App.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const lineData = [
  { day: "Mon", incidents: 12 },
  { day: "Tue", incidents: 18 },
  { day: "Wed", incidents: 10 },
  { day: "Thu", incidents: 25 },
  { day: "Fri", incidents: 17 },
  { day: "Sat", incidents: 30 },
  { day: "Sun", incidents: 20 },
];

const pieData = [
  { name: "Critical", value: 10 },
  { name: "High", value: 20 },
  { name: "Medium", value: 40 },
  { name: "Low", value: 30 },
];

const barData = [
  { zone: "South Mumbai", value: 40 },
  { zone: "Andheri", value: 30 },
  { zone: "Thane West", value: 50 },
  { zone: "Kalwa", value: 20 },
];

const COLORS = ["#ff0000", "#ff8800", "#00bfff", "#00ff88"];

function Dashboard() {
  const [simulation, setSimulation] = useState(false);

  const [logs, setLogs] = useState([]);

  const runSimulation = () => {
    setSimulation(true);

    const events = [
      "Flood surge detected in South Mumbai",
      "Signal intelligence activated",
      "Ministerial escalation approved",
      "Field execution teams dispatched",
      "Traffic rerouting initiated",
      "Water pumps activated",
      "Citizen complaint spike handled",
      "Emergency response stabilized",
      "Governance execution completed",
      "Replay timeline generated",
    ];

    setLogs([]);

    events.forEach((event, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, event]);
      }, index * 1500);
    });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}

      <div className="sidebar">
        <h2>UCCIS</h2>

        <div className="sidebar-menu">
          <Link to="/">Dashboard</Link>
          <Link to="/escalation">Escalation</Link>
          <Link to="/execution">Field Execution</Link>
          <Link to="/replay">Replay View</Link>
        </div>
      </div>

      {/* Main Content */}

      <div className="main-content">
        {/* Topbar */}

        <div className="topbar">
          <div>
            <h1>UCCIS Governance Dashboard</h1>

            <p style={{ color: "#9ca3af", marginTop: "5px" }}>
              Mumbai-Thane Ministerial Intelligence System
            </p>
          </div>

          <button onClick={runSimulation}>
            Run Ministerial Simulation
          </button>
        </div>

        {/* KPI Cards */}

        <div className="grid-cards">
          <div className="card">
            <h3>Total Incidents</h3>
            <h2>148</h2>
          </div>

          <div className="card">
            <h3>Flood Alerts</h3>
            <h2>28</h2>
          </div>

          <div className="card">
            <h3>Traffic Violations</h3>
            <h2>52</h2>
          </div>

          <div className="card">
            <h3>Water Shortages</h3>
            <h2>14</h2>
          </div>
        </div>

        {/* Simulation Feed */}

        {simulation && (
          <div className="feed">
            <h2 style={{ marginBottom: "20px", color: "cyan" }}>
              Live Ministerial Simulation
            </h2>

            {logs.map((log, index) => (
              <div key={index} className="feed-item">
                {log}
              </div>
            ))}
          </div>
        )}

        {/* Charts */}

        <div className="chart-grid">
          {/* Line Chart */}

          <div className="chart-box">
            <h2>Incident Trend Analysis</h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="incidents"
                  stroke="#00bfff"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}

          <div className="chart-box">
            <h2>Severity Distribution</h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}

          <div className="chart-box">
            <h2>Zone Comparison</h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="zone" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#00bfff"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Governance Feed */}

          <div className="chart-box">
            <h2>Governance Intelligence Feed</h2>

            <div className="feed">
              <div className="feed-item">
                Flood escalation triggered in South Mumbai
              </div>

              <div className="feed-item">
                Water shortage detected in Kalwa-Mumbra
              </div>

              <div className="feed-item">
                Traffic congestion increased near Andheri
              </div>

              <div className="feed-item">
                Emergency response teams activated
              </div>

              <div className="feed-item">
                Ministerial execution request approved
              </div>
            </div>
          </div>
        </div>

        {/* Map */}

        <div className="map-box">
          <MapContainer
            center={[19.076, 72.8777]}
            zoom={10}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[19.076, 72.8777]}>
              <Popup>South Mumbai Flood Alert</Popup>
            </Marker>

            <Marker position={[19.2183, 72.9781]}>
              <Popup>Thane Governance Alert</Popup>
            </Marker>

            <Marker position={[19.1136, 72.8697]}>
              <Popup>Andheri Traffic Escalation</Popup>
            </Marker>

            <Marker position={[19.1864, 73.0228]}>
              <Popup>Kalwa-Mumbra Water Crisis</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;