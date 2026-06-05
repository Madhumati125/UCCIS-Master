import { useState } from "react";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Runtime from "./pages/Runtime";
import Signals from "./pages/Signals";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div>
      <Navbar />

      <div className="menu">
        <button
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          onClick={() => setPage("runtime")}
        >
          Runtime
        </button>

        <button
          onClick={() => setPage("signals")}
        >
          Signals
        </button>
      </div>

      {page === "dashboard" && <Dashboard />}
      {page === "runtime" && <Runtime />}
      {page === "signals" && <Signals />}
    </div>
  );
}

export default App;