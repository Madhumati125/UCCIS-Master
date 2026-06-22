import React, { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import DashboardView from "../views/DashboardView";
import RuntimeView from "../views/RuntimeView";
import SignalsView from "../views/SignalsView";
import TelemetryView from "../views/TelemetryView";
import IncidentsView from "../views/IncidentsView";
import EscalationsView from "../views/EscalationsView";
import ReplayView from "../views/ReplayView";
import EvidenceView from "../views/EvidenceView";
import AnalyticsView from "../views/AnalyticsView";
import SettingsView from "../views/SettingsView";

function CommandCenter() {
  const [activePage, setActivePage] =
    useState("Dashboard");

  return (
    <div className="layout">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-content">

        <Header />

        {activePage === "Dashboard" &&
          <DashboardView />}

        {activePage === "Runtime" &&
          <RuntimeView />}

        {activePage === "Signals" &&
          <SignalsView />}

        {activePage === "Telemetry" &&
          <TelemetryView />}

        {activePage === "Incidents" &&
          <IncidentsView />}

        {activePage === "Escalations" &&
          <EscalationsView />}

        {activePage === "Replay" &&
          <ReplayView />}

        {activePage === "Evidence" &&
          <EvidenceView />}

        {activePage === "Analytics" &&
          <AnalyticsView />}

        {activePage === "Settings" &&
          <SettingsView />}

      </div>

    </div>
  );
}

export default CommandCenter;