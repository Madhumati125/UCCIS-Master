export default function RuntimeLogs({ data }) {
  return (
    <div className="card">
      <h3>🧾 Live Runtime Logs</h3>

      {data.map((log, i) => (
        <div key={i} style={{ marginBottom: "8px" }}>
          <span style={{ color: "#4f9cff" }}>
            [{log.level}]
          </span>{" "}
          <span style={{ color: "#fff" }}>
            {log.module}
          </span>{" "}
          →{" "}
          <span style={{ color: "#9ca3af" }}>
            {log.message}
          </span>
        </div>
      ))}
    </div>
  );
}