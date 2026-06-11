const ReplayPanel = () => {
  const replayEvents = [
    {
      replay_id: 1,
      trace_id: "TRC-FLOOD-001",
      replay_type: "Flood Replay",
      replay_status: "COMPLETED"
    },
    {
      replay_id: 2,
      trace_id: "TRC-TRAFFIC-001",
      replay_type: "Traffic Replay",
      replay_status: "COMPLETED"
    },
    {
      replay_id: 3,
      trace_id: "TRC-CYBER-001",
      replay_type: "Cyber Replay",
      replay_status: "COMPLETED"
    }
  ];

  return (
    <div className="card">
      <h2>Replay Events</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Trace ID</th>
            <th>Replay Type</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {replayEvents.map((event) => (
            <tr key={event.replay_id}>
              <td>{event.replay_id}</td>
              <td>{event.trace_id}</td>
              <td>{event.replay_type}</td>
              <td>{event.replay_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReplayPanel;