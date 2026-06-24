import { Routes, Route } from "react-router-dom";

import DashboardView from "../pages/Dashboard/DashboardView";
import SignalsView from "../pages/Signals/SignalsView";
import IncidentsView from "../pages/Incidents/IncidentsView";
import EscalationsView from "../pages/Escalations/EscalationsView";
import ReplayView from "../pages/Replay/ReplayView";
import EvidenceView from "../pages/Evidence/EvidenceView";
import AnalyticsView from "../pages/Analytics/AnalyticsView";
import HistoricalOpsView from "../pages/HistoricalOps/HistoricalOpsView";
import DomainsView from "../pages/Domains/DomainsView";
import RuntimeView from "../pages/Runtime/RuntimeView";
import SettingsView from "../pages/Settings/SettingsView";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<DashboardView />}
      />

      <Route
        path="/signals"
        element={<SignalsView />}
      />

      <Route
        path="/incidents"
        element={<IncidentsView />}
      />

      <Route
        path="/escalations"
        element={<EscalationsView />}
      />

      <Route
        path="/replay"
        element={<ReplayView />}
      />

      <Route
        path="/evidence"
        element={<EvidenceView />}
      />

      <Route
        path="/analytics"
        element={<AnalyticsView />}
      />

      <Route
        path="/historical-ops"
        element={<HistoricalOpsView />}
      />

      <Route
        path="/domains"
        element={<DomainsView />}
      />

      <Route
        path="/runtime"
        element={<RuntimeView />}
      />

      <Route
        path="/settings"
        element={<SettingsView />}
      />

      <Route
        path="*"
        element={
          <div
            style={{
              padding: "40px",
              textAlign: "center"
            }}
          >
            <h1>404 - Page Not Found</h1>
            <p>
              Route does not exist.
            </p>
          </div>
        }
      />

    </Routes>
  );
}