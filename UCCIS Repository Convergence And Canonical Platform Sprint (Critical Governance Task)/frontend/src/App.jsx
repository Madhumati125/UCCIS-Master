import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Signals from "./pages/Signals";
import Telemetry from "./pages/Telemetry";
import Incidents from "./pages/Incidents";
import Escalations from "./pages/Escalations";
import Replay from "./pages/Replay";
import Evidence from "./pages/Evidence";
import Observability from "./pages/Observability";
import ReviewPackets from "./pages/ReviewPackets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/signals"
          element={<Signals />}
        />

        <Route
          path="/telemetry"
          element={<Telemetry />}
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
          path="/replay"
          element={<Replay />}
        />

        <Route
          path="/evidence"
          element={<Evidence />}
        />

        <Route
          path="/observability"
          element={<Observability />}
        />

        <Route
          path="/review-packets"
          element={<ReviewPackets />}
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;