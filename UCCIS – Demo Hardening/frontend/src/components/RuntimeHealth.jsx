const RuntimeHealth = ({ health }) => {
  return (
    <div className="card">

      <h2>Runtime Health</h2>

      <div className="health-grid">

        <div>
          Backend:
          <br />
          {health.backend || "UNKNOWN"}
        </div>

        <div>
          Database:
          <br />
          {health.database || "UNKNOWN"}
        </div>

        <div>
          Runtime:
          <br />
          {health.runtimeEngine || "UNKNOWN"}
        </div>

        <div>
          Telemetry:
          <br />
          {health.telemetry || "UNKNOWN"}
        </div>

        <div>
          Escalation:
          <br />
          {health.escalationEngine || "UNKNOWN"}
        </div>

      </div>

    </div>
  );
};

export default RuntimeHealth;