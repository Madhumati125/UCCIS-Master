import { useEffect, useState } from "react";

const IncidentCard = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/incidents")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count || 0);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="metric-card">
      <h3>Incidents</h3>
      <h1>{count}</h1>
    </div>
  );
};

export default IncidentCard;