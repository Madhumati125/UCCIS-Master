import { useEffect, useState } from "react";
import axios from "axios";

function Replay() {

  const [lineage, setLineage] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/api/replay/generate");

    fetchLineage();

  }, []);

  const fetchLineage = () => {

    axios
      .get("http://localhost:5000/api/replay/lineage")
      .then((res) => {
        setLineage(res.data);
      });
  };

  return (
    <div
      style={{
        background: "#071018",
        color: "white",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>Replay Lineage System</h1>

      {lineage.map((item) => (

        <div
          key={item.id}
          style={{
            border: "1px solid #1f3b57",
            marginTop: "20px",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <p>Replay Event: {item.event}</p>

          <p>Confidence: {item.confidence}%</p>

          <p>
            Divergence:
            {item.divergence ? " DETECTED" : " STABLE"}
          </p>

          <p>
            Corruption:
            {item.corruption ? " ISOLATED" : " CLEAN"}
          </p>

          <p>
            Recovery:
            {item.delayedRecovery ? " DELAYED" : " NORMAL"}
          </p>

          <p>
            Timeline:
            {item.stale ? " STALE" : " ACTIVE"}
          </p>

          <p>Uncertainty: {item.uncertainty}</p>
        </div>
      ))}
    </div>
  );
}

export default Replay;