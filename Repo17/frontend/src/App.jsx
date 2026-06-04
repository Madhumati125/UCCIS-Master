import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import ExecutiveOverview from "./pages/ExecutiveOverview";
import ReplayReconstruction from "./pages/ReplayReconstruction";
import OperationalStress from "./pages/OperationalStress";
import EntropyFailure from "./pages/EntropyFailure";
import EscalationVisibility from "./pages/EscalationVisibility";
import FieldContinuity from "./pages/FieldContinuity";

function App() {

  return (

    <BrowserRouter>

      <div className="dashboard-layout">

        {/* SIDEBAR */}

        <Sidebar />

        {/* PAGE AREA */}

        <Routes>

          <Route
            path="/"
            element={<ExecutiveOverview />}
          />

          <Route
            path="/replay"
            element={<ReplayReconstruction />}
          />

          <Route
            path="/stress"
            element={<OperationalStress />}
          />

          <Route
            path="/entropy"
            element={<EntropyFailure />}
          />

          <Route
            path="/escalation"
            element={<EscalationVisibility />}
          />

          <Route
            path="/field"
            element={<FieldContinuity />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;