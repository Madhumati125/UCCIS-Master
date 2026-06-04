import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomeDashboard from "./pages/HomeDashboard";
import UnifiedDashboard from "./pages/UnifiedDashboard";

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomeDashboard />}
        />

        <Route
          path="/phase/:phaseName"
          element={<UnifiedDashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}