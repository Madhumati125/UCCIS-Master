import { useEffect, useState } from "react";
import api from "./api";

import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";

import SummaryCards from "./components/SummaryCards";
import RuntimeMetricsChart from "./components/RuntimeMetricsChart";

import ActiveOperations from "./components/ActiveOperations";
import RuntimeHealth from "./components/RuntimeHealth";
import TimelineReconstruction from "./components/TimelineReconstruction";
import HistoricalOperations from "./components/HistoricalOperations";
import MultiDomainPanel from "./components/MultiDomainPanel";
import ReplayMetrics from "./components/ReplayMetrics";
import EvidencePanel from "./components/EvidencePanel";
import PlatformReadiness from "./components/PlatformReadiness";

import ModuleDrilldown from "./components/ModuleDrilldown";

import GlobalSearch from "./components/GlobalSearch";
import RuntimeKPIs from "./components/RuntimeKPIs";
import LiveRuntimeFeed from "./components/LiveRuntimeFeed";
import IncidentSeverity from "./components/IncidentSeverity";
import DomainHealth from "./components/DomainHealth";
import TraceLineage from "./components/TraceLineage";
import ReplayReconstruction from "./components/ReplayReconstruction";
import EvidenceChain from "./components/EvidenceChain";
import DeploymentHealth from "./components/DeploymentHealth";
import OperatorActivity from "./components/OperatorActivity";

import "./styles/dashboard.css";

function App() {
  const [selectedModule, setSelectedModule] =
    useState("Dashboard");

  const [stats, setStats] = useState({
    activeSignals: 24,
    incidents: 8,
    escalations: 3,
    traces: 17
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await api.get(
        "/analytics/stats"
      );

      setStats(res.data);
    } catch (err) {
      console.log(
        "Using demo values..."
      );
    }
  };

  return (
    <div className="layout">

      <Sidebar
        selectedModule={selectedModule}
        setSelectedModule={setSelectedModule}
      />

      <div className="content">

        <DashboardHeader />

        {selectedModule ===
          "Dashboard" && (
          <>

            {/* Search */}

            <GlobalSearch />

            {/* KPI Cards */}

            <RuntimeKPIs />

            {/* Main Summary */}

            <SummaryCards
              stats={stats}
            />

            {/* Main Runtime Chart */}

            <RuntimeMetricsChart
              stats={stats}
            />

            {/* Feed + Deployment */}

            <div className="two-column">
              <LiveRuntimeFeed />
              <DeploymentHealth />
            </div>

            {/* Active Ops + Health */}

            <div className="two-column">
              <ActiveOperations />
              <RuntimeHealth />
            </div>

            {/* Severity + Domain */}

            <div className="two-column">
              <IncidentSeverity />
              <DomainHealth />
            </div>

            {/* Timeline */}

            <TimelineReconstruction />

            {/* Trace Lineage */}

            <TraceLineage />

            {/* Historical */}

            <HistoricalOperations />

            {/* Multi Domain */}

            <MultiDomainPanel />

            {/* Replay Reconstruction */}

            <ReplayReconstruction />

            {/* Replay + Evidence */}

            <div className="two-column">
              <ReplayMetrics />
              <EvidencePanel />
            </div>

            {/* Evidence Chain */}

            <EvidenceChain />

            {/* Operator Activity */}

            <OperatorActivity />

            {/* Platform Readiness */}

            <PlatformReadiness />

          </>
        )}

        {selectedModule !==
          "Dashboard" && (
          <ModuleDrilldown
            selectedModule={
              selectedModule
            }
          />
        )}

      </div>

    </div>
  );
}

export default App;