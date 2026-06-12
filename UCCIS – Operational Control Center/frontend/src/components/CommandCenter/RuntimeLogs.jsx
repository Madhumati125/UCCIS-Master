import { useEffect, useState } from "react";

const RuntimeLogs = () => {

  const [logs, setLogs] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/runtime")
      .then((res) => res.json())
      .then((data) => {
        setLogs(data.data || []);
      })
      .catch(() => {
        setLogs([]);
      });

  }, []);

  return (
    <div className="panel">

      <h2>Runtime Logs</h2>

      {logs.length === 0 ? (
        <p>No Runtime Logs Available</p>
      ) : (
        logs.slice(0, 5).map((log, index) => (
          <div key={index} className="log-row">
            {log.log_message}
          </div>
        ))
      )}

    </div>
  );
};

export default RuntimeLogs;