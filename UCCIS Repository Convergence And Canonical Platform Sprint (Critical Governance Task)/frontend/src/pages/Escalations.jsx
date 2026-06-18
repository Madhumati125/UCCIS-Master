import MainLayout from "../layouts/MainLayout";
import EscalationPanel from "../components/EscalationPanel";
import EscalationChart from "../components/EscalationChart";
import EscalationTable from "../components/EscalationTable";

function Escalations() {
  return (
    <MainLayout>
      <div className="page-container">

        <EscalationPanel />

        <EscalationChart />

        <EscalationTable />

      </div>
    </MainLayout>
  );
}

export default Escalations;