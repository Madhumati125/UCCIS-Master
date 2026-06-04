import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar.jsx";

import Telemetry from "./pages/Telemetry.jsx";
import Runtime from "./pages/Runtime.jsx";
import Replay from "./pages/Replay.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Telemetry />} />
            <Route path="/runtime" element={<Runtime />} />
            <Route path="/replay" element={<Replay />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}