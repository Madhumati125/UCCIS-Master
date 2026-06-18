import MainLayout from "../layouts/MainLayout";
import SummaryCards from "../components/SummaryCards";
import RuntimeMetricsChart from "../components/RuntimeMetricsChart";
import SystemHealth from "../components/SystemHealth";
import RecentActivity from "../components/RecentActivity";
import RuntimeLogs from "../components/RuntimeLogs";

function Dashboard() {
  return (
    <MainLayout>
      <div className="page-container">

        <SummaryCards />

        <RuntimeMetricsChart />

        <SystemHealth />

        <RecentActivity />

        <RuntimeLogs />

      </div>
    </MainLayout>
  );
}

export default Dashboard;