const ScenarioCards = () => {
  return (
    <div className="scenario-grid">

      <div className="card scenario-card flood">
        <h3>🌊 Flood Scenario</h3>
        <p>River Monitoring & Alerting</p>
      </div>

      <div className="card scenario-card traffic">
        <h3>🚦 Traffic Scenario</h3>
        <p>Traffic Congestion Response</p>
      </div>

      <div className="card scenario-card cyber">
        <h3>🔐 Cyber Scenario</h3>
        <p>SOC Threat Detection</p>
      </div>

    </div>
  );
};

export default ScenarioCards;