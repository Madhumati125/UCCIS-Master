import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Phase1 from "./pages/Phase1";
import Phase2 from "./pages/Phase2";
import Phase3 from "./pages/Phase3";
import Phase4 from "./pages/Phase4";
import Phase5 from "./pages/Phase5";
import Phase6 from "./pages/Phase6";
import Phase7 from "./pages/Phase7";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/phase1"
          element={<Phase1 />}
        />

        <Route
          path="/phase2"
          element={<Phase2 />}
        />

        <Route
          path="/phase3"
          element={<Phase3 />}
        />

        <Route
          path="/phase4"
          element={<Phase4 />}
        />

        <Route
          path="/phase5"
          element={<Phase5 />}
        />

        <Route
          path="/phase6"
          element={<Phase6 />}
        />

        <Route
          path="/phase7"
          element={<Phase7 />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;