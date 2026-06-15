export default function Sidebar({ activePanel, setActivePanel }) {
  return (
    <div className="sidebar">

      <h3>UCCIS</h3>

      <div onClick={() => setActivePanel("dashboard")}>
        Dashboard
      </div>

      <div onClick={() => setActivePanel("signals")}>
        Signal Layer
      </div>

      <div onClick={() => setActivePanel("runtime")}>
        System Runtime Health
      </div>

      <div onClick={() => setActivePanel("replay")}>
        Replay
      </div>

      <div onClick={() => setActivePanel("logs")}>
        Runtime Logs
      </div>

    </div>
  );
}