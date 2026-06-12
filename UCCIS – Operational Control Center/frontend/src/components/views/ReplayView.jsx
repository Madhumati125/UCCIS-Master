import { useEffect, useState } from "react";

const ReplayView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/replay")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => setData(null));
  }, []);

  return (
    <div className="panel">
      <h2>Replay Module</h2>

      <p>Replay Sessions Visualization</p>

      <h3>Backend Response</h3>
      <pre className="json-box">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default ReplayView;