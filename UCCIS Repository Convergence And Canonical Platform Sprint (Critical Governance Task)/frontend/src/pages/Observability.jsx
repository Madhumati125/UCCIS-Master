import MainLayout from "../layouts/MainLayout";
import ObservabilityPanel from "../components/ObservabilityPanel";
import ObservabilityChart from "../components/ObservabilityChart";
import ObservabilityTable from "../components/ObservabilityTable";

function Observability() {
  return (
    <MainLayout>
      <div className="page-container">

        <ObservabilityPanel />

        <ObservabilityChart />

        <ObservabilityTable />

      </div>
    </MainLayout>
  );
}

export default Observability;