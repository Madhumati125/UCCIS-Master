import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/replay/1")
      .then((res) => setData(res.data.replay || []))
      .catch((err) => console.log("API ERROR:", err));
  }, []);

  return (
    <div>
      <h2>UCCIS Dashboard</h2>

      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        data.map((d, i) => (
          <div key={i}>
            <p>State: {d.current_state}</p>
            <p>Risk: {d.risk_score}</p>
            <p>Confidence: {d.confidence_score}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;