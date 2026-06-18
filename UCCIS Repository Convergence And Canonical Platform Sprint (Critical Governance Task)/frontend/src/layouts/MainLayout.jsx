import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

function MainLayout({
  children
}) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <DashboardHeader />

        {children}
      </div>
    </div>
  );
}

export default MainLayout;