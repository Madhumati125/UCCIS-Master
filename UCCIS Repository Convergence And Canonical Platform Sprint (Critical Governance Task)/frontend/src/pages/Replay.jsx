import MainLayout from "../layouts/MainLayout";
import ReplayPanel from "../components/ReplayPanel";
import ReplayChart from "../components/ReplayChart";
import ReplayTable from "../components/ReplayTable";

function Replay() {
  return (
    <MainLayout>
      <div className="page-container">

        <ReplayPanel />

        <ReplayChart />

        <ReplayTable />

      </div>
    </MainLayout>
  );
}

export default Replay;