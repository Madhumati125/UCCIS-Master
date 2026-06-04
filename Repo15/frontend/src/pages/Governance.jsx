import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line
} from "recharts";

export default function Governance() {

  const governancePie = [
    { name: "Verified", value: 88 },
    { name: "Pending", value: 12 }
  ];

  const lineageData = [
    { phase: "Signal", value: 22 },
    { phase: "Escalation", value: 18 },
    { phase: "Recovery", value: 14 },
    { phase: "Validation", value: 30 }
  ];

  const auditTrend = [
    { time: "10:00", audits: 12 },
    { time: "10:05", audits: 18 },
    { time: "10:10", audits: 24 },
    { time: "10:15", audits: 16 },
    { time: "10:20", audits: 28 },
    { time: "10:25", audits: 34 }
  ];

  return (

    <div className="page">

      {/* HEADER */}

      <div className="page-header">

        <div>

          <h1>

            Governance Command Center

          </h1>

          <p>

            Replay-safe operational governance visibility

          </p>

        </div>

      </div>

      {/* TOP CARDS */}

      <div className="stats-grid">

        <div className="stat-card">

          <p className="stat-title">

            Governance Integrity

          </p>

          <h1 className="green-text">

            VERIFIED

          </h1>

        </div>

        <div className="stat-card">

          <p className="stat-title">

            Replay Lineage

          </p>

          <h1>

            98%

          </h1>

        </div>

        <div className="stat-card">

          <p className="stat-title">

            Active Audits

          </p>

          <h1>

            184

          </h1>

        </div>

        <div className="stat-card">

          <p className="stat-title">

            Divergence Risk

          </p>

          <h1 className="green-text">

            LOW

          </h1>

        </div>

      </div>

      {/* CHART GRID */}

      <div className="chart-grid">

        {/* PIE CHART */}

        <div className="panel">

          <h2>

            Governance Status

          </h2>

          <ResponsiveContainer
            width="100%"
            height={260}
          >

            <PieChart>

              <Pie
                data={governancePie}
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

        {/* BAR CHART */}

        <div className="panel">

          <h2>

            Replay Lineage Validation

          </h2>

          <ResponsiveContainer
            width="100%"
            height={260}
          >

            <BarChart data={lineageData}>

              <CartesianGrid stroke="#1e293b" />

              <XAxis dataKey="phase" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#00ff90"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* LINE CHART */}

        <div className="panel">

          <h2>

            Audit Continuity Trend

          </h2>

          <ResponsiveContainer
            width="100%"
            height={260}
          >

            <LineChart data={auditTrend}>

              <CartesianGrid stroke="#1e293b" />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="audits"
                stroke="#00ff90"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* BACKEND RESPONSE */}

      <div className="panel large-panel">

        <h2>

          Backend Governance Response

        </h2>

        <div className="terminal-box">

<pre>
{`{
  "platform": "UCCIS",
  "governanceSafe": true,
  "lineageIntegrity": "VERIFIED",
  "auditContinuity": "ACTIVE",
  "replaySafe": true,
  "divergenceRisk": "LOW",
  "activeAudits": 184,
  "timestamp": "2026-05-18T10:22:04Z"
}`}
</pre>

        </div>

      </div>

      {/* GOVERNANCE EVENTS */}

      <div className="bottom-grid">

        <div className="panel">

          <h2>

            Governance Validation Events

          </h2>

          <div className="recovery-list">

            <p>{">"} Replay lineage verified</p>

            <p>{">"} Governance reconstruction validated</p>

            <p>{">"} Audit continuity active</p>

            <p>{">"} Append-only persistence confirmed</p>

            <p>{">"} Anti-misrepresentation active</p>

          </div>

        </div>

        <div className="panel">

          <h2>

            Governance Metrics

          </h2>

          <div className="metrics-box">

            <div className="metric-row">

              <span>Replay Safety</span>

              <span className="green-text">

                PASS

              </span>

            </div>

            <div className="metric-row">

              <span>Lineage Integrity</span>

              <span className="green-text">

                VERIFIED

              </span>

            </div>

            <div className="metric-row">

              <span>Divergence Visibility</span>

              <span className="green-text">

                ACTIVE

              </span>

            </div>

            <div className="metric-row">

              <span>Audit Continuity</span>

              <span className="green-text">

                ENABLED

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}