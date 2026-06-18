import MainLayout from "../layouts/MainLayout";
import IncidentPanel from "../components/IncidentPanel";
import IncidentChart from "../components/IncidentChart";
import IncidentTable from "../components/IncidentTable";

function Incidents() {
  return (
    <MainLayout>
      <div className="page-container">

        <IncidentPanel />

        <IncidentChart />

        <IncidentTable />

      </div>
    </MainLayout>
  );
}

export default Incidents;