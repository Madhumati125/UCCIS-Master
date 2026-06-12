import { useEffect, useState } from "react";

const RuntimeView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/runtime")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => setData(null));
  }, []);

  return (
    <div className="panel">
      <h2>Runtime Logs Module</h2>

      {data?.data?.map((log, i) => (
        <div key={i} className="log-row">
          {log.log_message}
        </div>
      ))}

      <h3>Backend Response</h3>
      <pre className="json-box">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default RuntimeView;