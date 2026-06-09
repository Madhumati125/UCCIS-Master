import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <TopBar />

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;