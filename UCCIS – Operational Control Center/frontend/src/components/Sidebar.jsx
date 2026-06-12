const Sidebar = ({ active, setActive }) => {

  const items = [
    "Health",
    "Signals",
    "Incidents",
    "Escalations",
    "Telemetry",
    "Replay",
    "Runtime",
    "Evidence"
  ];

  return (
    <div className="sidebar">

      <h2 className="logo">UCCIS</h2>

      {items.map((item) => (
        <div
          key={item}
          className={`sidebar-item ${active === item ? "active" : ""}`}
          onClick={() => setActive(item)}
        >
          {item}
        </div>
      ))}

    </div>
  );
};

export default Sidebar;