export default function RuntimeTable({
  data
}) {

  return (
    <table
      border="1"
      cellPadding="10"
      width="100%"
    >
      <thead>
        <tr>
          <th>Signal</th>
          <th>Telemetry</th>
          <th>Incident</th>
          <th>Escalation</th>
          <th>Decision</th>
          <th>Approval</th>
          <th>Replay</th>
          <th>Log</th>
        </tr>
      </thead>

      <tbody>

        {data.map((row, index) => (

          <tr key={index}>

            <td>{row.signal_id}</td>
            <td>{row.telemetry_id}</td>
            <td>{row.incident_id}</td>
            <td>{row.escalation_id}</td>
            <td>{row.decision_id}</td>
            <td>{row.approval_id}</td>
            <td>{row.replay_id}</td>
            <td>{row.log_id}</td>

          </tr>

        ))}

      </tbody>
    </table>
  );
}