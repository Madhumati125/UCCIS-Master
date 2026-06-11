const RuntimeLogs = ({ logs }) => {
  return (
    <div className="card">

      <h2>Runtime Logs</h2>

      <div className="logs-container">

        {logs.length === 0 && (
          <p>No Runtime Logs Available</p>
        )}

        {logs.map((log, index) => (
          <div
            className="log-item"
            key={index}
          >
            <strong>
              {log.stage}
            </strong>

            <p>
              {log.message}
            </p>

            <small>
              {log.created_at}
            </small>
          </div>
        ))}

      </div>

    </div>
  );
};

export default RuntimeLogs;