import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Incidents from "../pages/Incidents";
import Escalations from "../pages/Escalations";
import Replay from "../pages/Replay";
import Evidence from "../pages/Evidence";
import Analytics from "../pages/Analytics";
import Observability from "../pages/Observability";
import RuntimeHealth from "../pages/RuntimeHealth";
import Domains from "../pages/Domains";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/incidents" element={<Incidents />} />
      <Route path="/escalations" element={<Escalations />} />
      <Route path="/replay" element={<Replay />} />
      <Route path="/evidence" element={<Evidence />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/observability" element={<Observability />} />
      <Route path="/runtime" element={<RuntimeHealth />} />
      <Route path="/domains" element={<Domains />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}