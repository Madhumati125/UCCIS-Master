import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Signals from "./pages/Signals";
import Incidents from "./pages/Incidents";
import Escalations from "./pages/Escalations";
import Timeline from "./pages/Timeline";
import Analytics from "./pages/Analytics";
import HistoricalOps from "./pages/HistoricalOps";
import Domains from "./pages/Domains";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route
              path="/signals"
              element={<Signals />}
            />

            <Route
              path="/incidents"
              element={<Incidents />}
            />

            <Route
              path="/escalations"
              element={<Escalations />}
            />

            <Route
              path="/timeline"
              element={<Timeline />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/history"
              element={<HistoricalOps />}
            />

            <Route
              path="/domains"
              element={<Domains />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;