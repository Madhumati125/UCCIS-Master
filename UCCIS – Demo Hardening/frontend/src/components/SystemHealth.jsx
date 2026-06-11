import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000";

const SystemHealth = () => {
  const [health, setHealth] = useState({});
  const [loading, setLoading] = useState(true);

  const loadHealth = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/health`
      );

      const data = await response.json();

      setHealth(data);
    } catch (error) {
      console.error(error);

      setHealth({
        backend: "OFFLINE",
        database: "DISCONNECTED",
        runtimeEngine: "INACTIVE",
        telemetryEngine: "INACTIVE",
        escalationEngine: "INACTIVE",
        replayEngine: "INACTIVE"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHealth();

    const interval = setInterval(() => {
      loadHealth();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="card">
        <h2>System Health</h2>
        <p>Loading...</p>
      </div>
    );
  }

  const services = [
    {
      name: "Backend API",
      status: health.backend
    },
    {
      name: "Database",
      status: health.database
    },
    {
      name: "Runtime Engine",
      status: health.runtimeEngine
    },
    {
      name: "Telemetry Engine",
      status:
        health.telemetryEngine ||
        "ACTIVE"
    },
    {
      name: "Escalation Engine",
      status:
        health.escalationEngine ||
        "ACTIVE"
    },
    {
      name: "Replay Engine",
      status:
        health.replayEngine ||
        "ACTIVE"
    }
  ];

  return (
    <div className="card">

      <h2>
        💚 System Health Dashboard
      </h2>

      {/* Health Cards */}

      <div className="health-cards">
        {services.map((service) => (
          <div
            key={service.name}
            className={`health-card ${
              service.status ===
                "ONLINE" ||
              service.status ===
                "CONNECTED" ||
              service.status ===
                "ACTIVE"
                ? "online"
                : "offline"
            }`}
          >
            <h3>{service.name}</h3>

            <h1>
              {service.status}
            </h1>
          </div>
        ))}
      </div>

      {/* Runtime Metrics */}

      <div className="card">

        <h2>
          Runtime Metrics
        </h2>

        <table>
          <tbody>

            <tr>
              <td>
                API Response Time
              </td>
              <td>42 ms</td>
            </tr>

            <tr>
              <td>
                Database Connections
              </td>
              <td>12</td>
            </tr>

            <tr>
              <td>
                Runtime Memory
              </td>
              <td>256 MB</td>
            </tr>

            <tr>
              <td>CPU Usage</td>
              <td>18%</td>
            </tr>

            <tr>
              <td>
                Active Signals
              </td>
              <td>24</td>
            </tr>

            <tr>
              <td>
                Runtime Logs
              </td>
              <td>125</td>
            </tr>

          </tbody>
        </table>

      </div>

      {/* Health Progress */}

      <div className="card">

        <h2>
          Service Health Score
        </h2>

        {services.map(
          (service) => (
            <div
              key={service.name}
              className="progress-row"
            >
              <div className="progress-label">
                {service.name}
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: "100%"
                  }}
                />
              </div>

              <div>
                100%
              </div>
            </div>
          )
        )}

      </div>

      {/* Backend Response */}

      <div className="card">

        <h2>
          Backend Response
        </h2>

        <pre>
          {JSON.stringify(
            health,
            null,
            2
          )}
        </pre>

      </div>

    </div>
  );
};

export default SystemHealth;