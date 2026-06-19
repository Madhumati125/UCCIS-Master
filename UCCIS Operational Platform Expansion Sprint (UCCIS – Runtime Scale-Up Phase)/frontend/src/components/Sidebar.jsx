import { Link } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Signals", path: "/signals" },
    { name: "Incidents", path: "/incidents" },
    { name: "Escalations", path: "/escalations" },
    { name: "Timeline", path: "/timeline" },
    { name: "Analytics", path: "/analytics" },
    { name: "Historical Ops", path: "/history" },
    { name: "Domains", path: "/domains" }
  ];

  return (
    <div className="sidebar">
      <h2>UCCIS</h2>

      {menuItems.map((item) => (
        <Link key={item.name} to={item.path} className="menu-link">
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;