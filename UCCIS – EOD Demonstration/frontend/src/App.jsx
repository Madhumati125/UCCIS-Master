import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Signals from "./pages/Signals";
import Telemetry from "./pages/Telemetry";
import Incidents from "./pages/Incidents";
import Escalations from "./pages/Escalations";
import Decisions from "./pages/Decisions";
import Replay from "./pages/Replay";
import RuntimeLogsPage from "./pages/RuntimeLogsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>

          <Route index element={<Dashboard />} />

          <Route
            path="signals"
            element={<Signals />}
          />

          <Route
            path="telemetry"
            element={<Telemetry />}
          />

          <Route
            path="incidents"
            element={<Incidents />}
          />

          <Route
            path="escalations"
            element={<Escalations />}
          />

          <Route
            path="decisions"
            element={<Decisions />}
          />

          <Route
            path="replay"
            element={<Replay />}
          />

          <Route
            path="runtime"
            element={<RuntimeLogsPage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;