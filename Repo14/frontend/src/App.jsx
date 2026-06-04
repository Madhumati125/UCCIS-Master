import {

  Routes,
  Route,
  NavLink

} from "react-router-dom";

import Operations from "./pages/Operations";

import Replay from "./pages/Replay";

import Observability from "./pages/Observability";

import Governance from "./pages/Governance";

export default function App() {

  return (

    <div className="app-root">

      {/* TOP NAV */}

      <div className="top-nav">

        <div className="logo">

          UCCIS COMMAND CENTER

        </div>

        {/* NAVIGATION */}

        <div className="nav-links">

          <NavLink to="/">

            Operations

          </NavLink>

          <NavLink to="/replay">

            Replay

          </NavLink>

          <NavLink to="/observability">

            Observability

          </NavLink>

          <NavLink to="/governance">

            Governance

          </NavLink>

        </div>

        <div className="live-status">

          ● LIVE

        </div>

      </div>

      {/* ROUTES */}

      <Routes>

        <Route
          path="/"
          element={<Operations />}
        />

        <Route
          path="/replay"
          element={<Replay />}
        />

        <Route
          path="/observability"
          element={<Observability />}
        />

        <Route
          path="/governance"
          element={<Governance />}
        />

      </Routes>

    </div>

  );
}