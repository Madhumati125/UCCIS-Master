import SystemHealth from "../components/SystemHealth";
import BackendResponse from "../components/BackendResponse";
import RuntimeLogs from "../components/RuntimeLogs";
import IncidentChart from "../components/Charts/IncidentChart";
import TelemetryChart from "../components/Charts/TelemetryChart";

const Dashboard = () => {
  return (
    <>
      <SystemHealth />

      <div className="stats-grid">
        <div className="card">
          <h2>Total Signals</h2>
          <h1>15</h1>
        </div>

        <div className="card">
          <h2>Total Telemetry</h2>
          <h1>20</h1>
        </div>

        <div className="card">
          <h2>Total Incidents</h2>
          <h1>8</h1>
        </div>

        <div className="card">
          <h2>Total Escalations</h2>
          <h1>5</h1>
        </div>
      </div>

      <div className="charts-grid">
        <IncidentChart />
        <TelemetryChart />
      </div>

      <BackendResponse />

      <RuntimeLogs />
    </>
  );
};

export default Dashboard;