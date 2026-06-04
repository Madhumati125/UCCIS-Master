import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>UCCIS</h2>

      <Link to="/">📡 Telemetry</Link>
      <Link to="/runtime">🧾 Runtime</Link>
      <Link to="/replay">🔁 Replay</Link>
    </div>
  );
}