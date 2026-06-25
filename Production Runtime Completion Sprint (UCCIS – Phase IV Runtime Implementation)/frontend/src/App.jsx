import React from "react";
import {
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Incidents from "./pages/Incidents";
import Escalations from "./pages/Escalations";
import Replay from "./pages/Replay";
import Evidence from "./pages/Evidence";
import Runtime from "./pages/Runtime";

function App() {
  return (
    <div className="layout">

      {/* Sidebar */}

      <aside
        style={{
          width: "260px",
          minHeight: "100vh",
          background: "#111827",
          borderRight:
            "1px solid #1f2937",
          padding: "20px"
        }}
      >
        <h2
          style={{
            color: "#38bdf8",
            marginBottom: "30px"
          }}
        >
          UCCIS Runtime
        </h2>

        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <li>
              <Link
                to="/dashboard"
                style={linkStyle}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/incidents"
                style={linkStyle}
              >
                Incidents
              </Link>
            </li>

            <li>
              <Link
                to="/escalations"
                style={linkStyle}
              >
                Escalations
              </Link>
            </li>

            <li>
              <Link
                to="/replay"
                style={linkStyle}
              >
                Replay
              </Link>
            </li>

            <li>
              <Link
                to="/evidence"
                style={linkStyle}
              >
                Evidence
              </Link>
            </li>

            <li>
              <Link
                to="/runtime"
                style={linkStyle}
              >
                Runtime
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}

      <main
        style={{
          flex: 1,
          padding: "25px",
          overflowY: "auto"
        }}
      >
        <Routes>

          <Route
            path="/"
            element={
              <Navigate
                to="/dashboard"
              />
            }
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
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
            path="/runtime"
            element={<Runtime />}
          />

          <Route
            path="*"
            element={
              <div>
                <h1>
                  404 - Page Not Found
                </h1>
              </div>
            }
          />

        </Routes>
      </main>

    </div>
  );
}

const linkStyle = {
  color: "#e5e7eb",
  textDecoration: "none",
  display: "block",
  padding: "12px",
  borderRadius: "8px",
  background: "#1f2937"
};

export default App;