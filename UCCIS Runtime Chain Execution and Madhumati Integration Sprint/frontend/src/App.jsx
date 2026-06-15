import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import RuntimeDashboard from "./pages/RuntimeDashboard";
import ReplayView from "./pages/ReplayView";
import RuntimeLogs from "./pages/RuntimeLogs";

import "./styles/dashboard.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RuntimeDashboard />
          }
        />

        <Route
          path="/replay"
          element={
            <ReplayView />
          }
        />

        <Route
          path="/logs"
          element={
            <RuntimeLogs />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;