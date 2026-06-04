import "./charts/chartSetup";
import Dashboard from "./Dashboard";
import "./styles.css";

function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        UCCIS Intelligence Dashboard
      </h2>
      <Dashboard />
    </div>
  );
}

export default App;