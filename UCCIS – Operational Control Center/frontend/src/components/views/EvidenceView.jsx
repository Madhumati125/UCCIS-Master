import { useEffect, useState } from "react";

const EvidenceView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/replay")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => setData(null));
  }, []);

  return (
    <div className="panel">
      <h2>Evidence Module</h2>

      <div className="evidence-list">
        <p>Signal Evidence</p>
        <p>Telemetry Evidence</p>
        <p>Incident Evidence</p>
        <p>Replay Evidence</p>
      </div>

      <h3>Backend Trace</h3>
      <pre className="json-box">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default EvidenceView;