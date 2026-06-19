import { useState } from "react";

function TraceSearch() {
  const [traceId, setTraceId] = useState("");

  const searchTrace = () => {
    alert(`Searching ${traceId}`);
  };

  return (
    <div className="card">
      <h2>Trace Search</h2>

      <input
        type="text"
        placeholder="TRACE-1001"
        value={traceId}
        onChange={(e) => setTraceId(e.target.value)}
      />

      <button onClick={searchTrace}>Search</button>
    </div>
  );
}

export default TraceSearch;