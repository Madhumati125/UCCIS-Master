import MainLayout from "../layouts/MainLayout";

import SignalPanel from "../components/SignalPanel";
import SignalChart from "../components/SignalChart";
import SignalTable from "../components/SignalTable";

function Signals() {
  return (
    <MainLayout>
      <div className="page-container">

        <SignalPanel />

        <SignalChart />

        <SignalTable />

      </div>
    </MainLayout>
  );
}

export default Signals;