import {

  Routes,
  Route

} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Governance from "./pages/Governance";

import Replay from "./pages/Replay";

import Telemetry from "./pages/Telemetry";

import Validation from "./pages/Validation";

import Operators from "./pages/Operators";

import Testing from "./pages/Testing";

export default function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/governance"
        element={<Governance />}
      />

      <Route
        path="/replay"
        element={<Replay />}
      />

      <Route
        path="/telemetry"
        element={<Telemetry />}
      />

      <Route
        path="/validation"
        element={<Validation />}
      />

      <Route
        path="/operators"
        element={<Operators />}
      />

      <Route
        path="/testing"
        element={<Testing />}
      />

    </Routes>

  );

}