import MainLayout from "../layouts/MainLayout";
import EvidencePanel from "../components/EvidencePanel";
import EvidenceChart from "../components/EvidenceChart";
import EvidenceTable from "../components/EvidenceTable";

function Evidence() {
  return (
    <MainLayout>
      <div className="page-container">

        <EvidencePanel />

        <EvidenceChart />

        <EvidenceTable />

      </div>
    </MainLayout>
  );
}

export default Evidence;