const KPISection = ({ kpis }) => {
  return (
    <div className="kpi-grid">

      <div className="card kpi-card">
        <h3>Total Signals</h3>
        <h1>{kpis.signals || 0}</h1>
      </div>

      <div className="card kpi-card">
        <h3>Total Incidents</h3>
        <h1>{kpis.incidents || 0}</h1>
      </div>

      <div className="card kpi-card">
        <h3>Telemetry Events</h3>
        <h1>{kpis.telemetry || 0}</h1>
      </div>

      <div className="card kpi-card">
        <h3>Runtime Logs</h3>
        <h1>{kpis.runtimeLogs || 0}</h1>
      </div>

    </div>
  );
};

export default KPISection;