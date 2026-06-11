import React from "react";

const Scenarios = () => {
  return (
    <div>

      {/* Top KPI Cards */}

      <div className="scenario-overview">

        <div className="scenario-stat-card flood">
          <h3>🌊 Flood Alerts</h3>
          <h1>12</h1>
          <p>Active Signals</p>
        </div>

        <div className="scenario-stat-card traffic">
          <h3>🚦 Traffic Incidents</h3>
          <h1>18</h1>
          <p>Detected Events</p>
        </div>

        <div className="scenario-stat-card cyber">
          <h3>🔐 Cyber Threats</h3>
          <h1>7</h1>
          <p>Security Alerts</p>
        </div>

      </div>

      {/* Activity Chart */}

      <div className="card">
        <h2>Scenario Activity Overview</h2>

        <div className="chart-container">

          <div className="chart-row">
            <span>Flood</span>

            <div className="chart-bar">
              <div
                className="bar flood-bar"
                style={{
                  width: "65%"
                }}
              />
            </div>

            <span>12</span>
          </div>

          <div className="chart-row">
            <span>Traffic</span>

            <div className="chart-bar">
              <div
                className="bar traffic-bar"
                style={{
                  width: "90%"
                }}
              />
            </div>

            <span>18</span>
          </div>

          <div className="chart-row">
            <span>Cyber</span>

            <div className="chart-bar">
              <div
                className="bar cyber-bar"
                style={{
                  width: "40%"
                }}
              />
            </div>

            <span>7</span>
          </div>

        </div>
      </div>

      {/* Flood */}

      <div className="scenario-grid-details">

        <div className="card">

          <h2>🌊 Flood Scenario</h2>

          <div className="scenario-flow">
            Signal → Telemetry →
            Incident → Escalation →
            Decision → Replay
          </div>

          <table>
            <tbody>

              <tr>
                <td>River Level</td>
                <td>7.8m</td>
              </tr>

              <tr>
                <td>Risk Level</td>
                <td>HIGH</td>
              </tr>

              <tr>
                <td>Incidents</td>
                <td>5</td>
              </tr>

              <tr>
                <td>Escalations</td>
                <td>2</td>
              </tr>

            </tbody>
          </table>

          <h3>Backend Response</h3>

          <pre>
{`{
 "trace_id":"FLD-001",
 "signal_type":"Flood Alert",
 "severity":"HIGH",
 "status":"ACTIVE"
}`}
          </pre>

        </div>

        {/* Traffic */}

        <div className="card">

          <h2>🚦 Traffic Scenario</h2>

          <div className="scenario-flow">
            Signal → Telemetry →
            Incident → Escalation →
            Decision → Replay
          </div>

          <table>
            <tbody>

              <tr>
                <td>Congestion Zones</td>
                <td>8</td>
              </tr>

              <tr>
                <td>Risk Level</td>
                <td>MEDIUM</td>
              </tr>

              <tr>
                <td>Incidents</td>
                <td>9</td>
              </tr>

              <tr>
                <td>Escalations</td>
                <td>3</td>
              </tr>

            </tbody>
          </table>

          <h3>Backend Response</h3>

          <pre>
{`{
 "trace_id":"TRF-001",
 "signal_type":"Traffic Incident",
 "severity":"MEDIUM",
 "status":"ACTIVE"
}`}
          </pre>

        </div>

        {/* Cyber */}

        <div className="card">

          <h2>🔐 Cyber Scenario</h2>

          <div className="scenario-flow">
            Signal → Telemetry →
            Incident → Escalation →
            Decision → Replay
          </div>

          <table>
            <tbody>

              <tr>
                <td>Threat Events</td>
                <td>7</td>
              </tr>

              <tr>
                <td>Risk Level</td>
                <td>CRITICAL</td>
              </tr>

              <tr>
                <td>Incidents</td>
                <td>4</td>
              </tr>

              <tr>
                <td>Escalations</td>
                <td>4</td>
              </tr>

            </tbody>
          </table>

          <h3>Backend Response</h3>

          <pre>
{`{
 "trace_id":"CYB-001",
 "signal_type":"Cyber Incident",
 "severity":"CRITICAL",
 "status":"ACTIVE"
}`}
          </pre>

        </div>

      </div>

    </div>
  );
};

export default Scenarios;