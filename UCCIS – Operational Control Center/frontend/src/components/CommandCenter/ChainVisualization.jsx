const ChainVisualization = () => {

  const chain = [
    "Signal",
    "Telemetry",
    "Incident",
    "Escalation",
    "Decision",
    "Replay",
    "Runtime"
  ];

  return (
    <div className="panel">

      <h2>Live Operational Chain</h2>

      <div className="chain-flow">

        {chain.map((item, index) => (
          <div key={index} className="chain-item">

            <span>{item}</span>

            {index !== chain.length - 1 && (
              <span className="arrow">→</span>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default ChainVisualization;