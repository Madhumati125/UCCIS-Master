import { Link } from "react-router-dom";

import {
  Shield,
  Database,
  Activity,
  AlertTriangle,
  Radio,
  Cpu
} from "lucide-react";

import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

export default function Dashboard() {

  const telemetryData = [
    { time: "10:00", value: 82 },
    { time: "10:05", value: 34 },
    { time: "10:10", value: 48 },
    { time: "10:15", value: 90 },
    { time: "10:20", value: 52 },
    { time: "10:25", value: 71 },
    { time: "10:30", value: 61 }
  ];

  const replayData = [
    { name: "Detected", value: 18 },
    { name: "Isolated", value: 12 },
    { name: "Recovered", value: 28 },
    { name: "Validated", value: 35 }
  ];

  const governanceData = [
    { name: "Verified", value: 88 },
    { name: "Pending", value: 12 }
  ];

  return (

    <div className="dashboard">

      {/* HEADER */}

      <div className="top-header">

        <div>

          <h1 className="main-title">

            UCCIS Operational Command Center

          </h1>

          <p className="subtitle">

            Replay-Safe Governance Infrastructure

          </p>

        </div>

        <div className="live-box">

          <div className="live-dot"></div>

          LIVE

        </div>

      </div>

      {/* ALERT BAR */}

      <div className="alert-bar">

        LIVE REPLAY ACTIVE • VALIDATION PASS •
        RECOVERY STABLE • GOVERNANCE VERIFIED

      </div>

      {/* MAIN LAYOUT */}

      <div className="main-layout">

        {/* SIDEBAR */}

        <div className="sidebar">

          <Link
            to="/governance"
            className="sidebar-item"
          >

            <Shield size={18} />

            Governance

          </Link>

          <Link
            to="/replay"
            className="sidebar-item"
          >

            <Database size={18} />

            Replay

          </Link>

          <Link
            to="/telemetry"
            className="sidebar-item"
          >

            <Activity size={18} />

            Telemetry

          </Link>

          <Link
            to="/validation"
            className="sidebar-item"
          >

            <AlertTriangle size={18} />

            Validation

          </Link>

          <Link
            to="/operators"
            className="sidebar-item"
          >

            <Radio size={18} />

            Operators

          </Link>

          <Link
            to="/testing"
            className="sidebar-item"
          >

            <Cpu size={18} />

            Testing

          </Link>

        </div>

        {/* CONTENT */}

        <div className="content">

          {/* TOP STATS */}

          <div className="stats-grid">

            <div className="stat-card">

              <p className="stat-title">

                Replay Confidence

              </p>

              <h1>

                98%

              </h1>

            </div>

            <div className="stat-card">

              <p className="stat-title">

                Active Signals

              </p>

              <h1>

                184

              </h1>

            </div>

            <div className="stat-card">

              <p className="stat-title">

                Operators

              </p>

              <h1>

                12

              </h1>

            </div>

            <div className="stat-card">

              <p className="stat-title">

                Recovery Status

              </p>

              <h1 className="green-text">

                STABLE

              </h1>

            </div>

          </div>

          {/* CHART GRID */}

          <div className="chart-grid">

            {/* TELEMETRY */}

            <div className="panel">

              <h2>

                LIVE TELEMETRY

              </h2>

              <ResponsiveContainer
                width="100%"
                height={250}
              >

                <AreaChart data={telemetryData}>

                  <defs>

                    <linearGradient
                      id="colorTelemetry"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="5%"
                        stopColor="#00ff90"
                        stopOpacity={0.8}
                      />

                      <stop
                        offset="95%"
                        stopColor="#00ff90"
                        stopOpacity={0}
                      />

                    </linearGradient>

                  </defs>

                  <CartesianGrid stroke="#1e293b" />

                  <XAxis dataKey="time" />

                  <YAxis />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#00ff90"
                    fillOpacity={1}
                    fill="url(#colorTelemetry)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

            {/* REPLAY */}

            <div className="panel">

              <h2>

                REPLAY RECONSTRUCTION

              </h2>

              <ResponsiveContainer
                width="100%"
                height={250}
              >

                <BarChart data={replayData}>

                  <CartesianGrid stroke="#1e293b" />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    fill="#00ff90"
                    radius={[6, 6, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

            {/* GOVERNANCE */}

            <div className="panel">

              <h2>

                GOVERNANCE STATUS

              </h2>

              <ResponsiveContainer
                width="100%"
                height={250}
              >

                <PieChart>

                  <Pie
                    data={governanceData}
                    dataKey="value"
                    outerRadius={90}
                  >

                    <Cell fill="#00ff90" />

                    <Cell fill="#ff4444" />

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* BOTTOM GRID */}

          <div className="bottom-grid">

            {/* BACKEND */}

            <div className="panel large-panel">

              <h2>

                BACKEND OPERATIONAL RESPONSE

              </h2>

              <div className="terminal-box">

<pre>
{`{
  "platform": "UCCIS",
  "status": "FINAL OPERATIONAL GOVERNANCE PLATFORM ACTIVE",
  "replaySafe": true,
  "governanceSafe": true,
  "telemetryStreaming": true,
  "timestamp": "2026-05-18T05:03:04.460Z"
}`}
</pre>

              </div>

            </div>

            {/* CORRUPTION RECOVERY */}

            <div className="panel">

              <h2>

                CORRUPTION RECOVERY

              </h2>

              <ResponsiveContainer
                width="100%"
                height={220}
              >

                <BarChart data={replayData}>

                  <CartesianGrid stroke="#1e293b" />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    fill="#00ff90"
                    radius={[6, 6, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

              <div className="recovery-list">

                <p>{">"} Corruption detected</p>

                <p>{">"} Replay isolated</p>

                <p>{">"} Recovery initiated</p>

                <p>{">"} Replay continuity verified</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}