import MainLayout from "../layouts/MainLayout";
import TelemetryPanel from "../components/TelemetryPanel";
import TelemetryChart from "../components/TelemetryChart";
import TelemetryTable from "../components/TelemetryTable";

function Telemetry() {
  return (
    <MainLayout>
      <div className="page-container">

        <TelemetryPanel />

        <TelemetryChart />

        <TelemetryTable />

      </div>
    </MainLayout>
  );
}

export default Telemetry;