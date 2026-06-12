import SignalsView from "./views/SignalsView";
import IncidentsView from "./views/IncidentsView";
import EscalationView from "./views/EscalationView";
import TelemetryView from "./views/TelemetryView";
import ReplayView from "./views/ReplayView";
import RuntimeView from "./views/RuntimeView";
import EvidenceView from "./views/EvidenceView";
import HealthView from "./views/HealthView";

const ContentView = ({ active }) => {

  switch (active) {

    case "Health":
      return <HealthView />;

    case "Signals":
      return <SignalsView />;

    case "Incidents":
      return <IncidentsView />;

    case "Escalations":
      return <EscalationView />;

    case "Telemetry":
      return <TelemetryView />;

    case "Replay":
      return <ReplayView />;

    case "Runtime":
      return <RuntimeView />;

    case "Evidence":
      return <EvidenceView />;

    default:
      return <HealthView />;  // safe fallback (NO hardcoded text)
  }
};

export default ContentView;