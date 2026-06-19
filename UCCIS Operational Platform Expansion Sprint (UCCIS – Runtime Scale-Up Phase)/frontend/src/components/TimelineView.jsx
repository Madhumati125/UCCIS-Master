function TimelineView() {
  const timeline = [
    {
      traceId: "TRACE-1001",
      signal: "SIG-1001",
      incident: "INC-1001",
      escalation: "ESC-1001",
      replay: "REP-1001"
    }
  ];

  return (
    <div>
      <h2>Timeline Reconstruction</h2>

      {timeline.map((item) => (
        <div key={item.traceId} className="timeline-card">
          <h3>{item.traceId}</h3>

          <p>{item.signal}</p>
          <p>{item.incident}</p>
          <p>{item.escalation}</p>
          <p>{item.replay}</p>
        </div>
      ))}
    </div>
  );
}

export default TimelineView;