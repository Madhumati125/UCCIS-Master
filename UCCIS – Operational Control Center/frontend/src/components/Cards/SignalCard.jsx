import { useEffect, useState } from "react";

const SignalCard = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/signals")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count || 0);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="metric-card">
      <h3>Active Signals</h3>
      <h1>{count}</h1>
    </div>
  );
};

export default SignalCard;