import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import KPISection from "../components/KPISection";
import SystemHealth from "../components/SystemHealth";
import ScenarioCards from "../components/ScenarioCards";
import IncidentTable from "../components/IncidentTable";
import RuntimeLogs from "../components/RuntimeLogs";
import ReplayPanel from "../components/ReplayPanel";

import {
  getHealth,
  getKPIs,
  getIncidents,
  getRuntimeLogs,
  getReplayEvents
} from "../services/api";

const Dashboard = () => {
  const [health, setHealth] = useState({});
  const [kpis, setKpis] = useState({});
  const [incidents, setIncidents] = useState([]);
  const [runtimeLogs, setRuntimeLogs] = useState([]);
  const [replayEvents, setReplayEvents] = useState([]);
  const [activeSection, setActiveSection] =
    useState("dashboard");

  const loadDashboardData = async () => {
    try {
      const [
        healthData,
        kpiData,
        incidentData,
        runtimeData
      ] = await Promise.all([
        getHealth(),
        getKPIs(),
        getIncidents(),
        getRuntimeLogs()
      ]);

      setHealth(healthData || {});
      setKpis(kpiData || {});
      setIncidents(
        Array.isArray(incidentData)
          ? incidentData
          : []
      );

      setRuntimeLogs(
        Array.isArray(runtimeData)
          ? runtimeData
          : []
      );

      try {
        const replayData =
          await getReplayEvents();

        setReplayEvents(
          Array.isArray(replayData)
            ? replayData
            : []
        );
      } catch {
        setReplayEvents([]);
      }
    } catch (error) {
      console.error(
        "Dashboard Error:",
        error
      );
    }
  };

  useEffect(() => {
    loadDashboardData();

    const interval = setInterval(() => {
      loadDashboardData();
    }, 10000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      {/* Sidebar */}

      <div className="sidebar">
        <h2>UCCIS</h2>

        <ul>
          <li
            onClick={() =>
              setActiveSection(
                "dashboard"
              )
            }
          >
            📊 Dashboard
          </li>

          <li
            onClick={() =>
              setActiveSection(
                "health"
              )
            }
          >
            💚 System Health
          </li>

          <li
            onClick={() =>
              setActiveSection(
                "scenarios"
              )
            }
          >
            🌊 Scenarios
          </li>

          <li
            onClick={() =>
              setActiveSection(
                "incidents"
              )
            }
          >
            🚨 Incidents
          </li>

          <li
            onClick={() =>
              setActiveSection(
                "logs"
              )
            }
          >
            📜 Runtime Logs
          </li>

          <li
            onClick={() =>
              setActiveSection(
                "replay"
              )
            }
          >
            🎬 Replay Events
          </li>
        </ul>
      </div>

      {/* Main Content */}

      <div className="main-content">
        <div className="header">
          <div>
            <h1>
              UCCIS Command Center
            </h1>

            <p>
              Unified Command &
              Control Intelligence
              System
            </p>
          </div>

          <button
            className="refresh-btn"
            onClick={
              loadDashboardData
            }
          >
            Refresh
          </button>
        </div>

        {/* Dashboard */}

        {activeSection ===
          "dashboard" && (
          <>
            <KPISection
              kpis={kpis}
            />

            <ScenarioCards />

            <div className="dashboard-grid">
              <div className="left-panel">
                <IncidentTable
                  incidents={
                    incidents
                  }
                />
              </div>

              <div className="right-panel">
                <RuntimeLogs
                  logs={
                    runtimeLogs
                  }
                />
              </div>
            </div>
          </>
        )}

        {/* System Health */}

        {activeSection ===
          "health" && (
          <SystemHealth />
        )}

        {/* Scenarios */}

        {activeSection ===
          "scenarios" && (
          <div className="card">
            <h2>
              Scenario Overview
            </h2>

            <ScenarioCards />

            <div className="card">
              <h3>
                Flood Scenario
              </h3>
              <p>
                Signal → Telemetry
                → Incident →
                Escalation →
                Dashboard
              </p>
            </div>

            <div className="card">
              <h3>
                Traffic Scenario
              </h3>
              <p>
                Signal → Telemetry
                → Incident →
                Escalation →
                Dashboard
              </p>
            </div>

            <div className="card">
              <h3>
                Cyber Scenario
              </h3>
              <p>
                Signal → Telemetry
                → Incident →
                Escalation →
                Dashboard
              </p>
            </div>
          </div>
        )}

        {/* Incidents */}

        {activeSection ===
          "incidents" && (
          <IncidentTable
            incidents={incidents}
          />
        )}

        {/* Runtime Logs */}

        {activeSection ===
          "logs" && (
          <RuntimeLogs
            logs={runtimeLogs}
          />
        )}

        {/* Replay */}

        {activeSection ===
          "replay" && (
          <ReplayPanel
            replayEvents={
              replayEvents
            }
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;