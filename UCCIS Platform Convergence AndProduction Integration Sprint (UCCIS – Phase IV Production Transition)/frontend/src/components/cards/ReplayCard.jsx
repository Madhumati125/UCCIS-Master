import "./ReplayCard.css";

function ReplayCard({
  replayId,
  status,
  executionTime
}) {

  return (
    <div className="replay-card">

      <h4>
        {replayId}
      </h4>

      <p>
        Status:
        {" "}
        {status}
      </p>

      <p>
        Time:
        {" "}
        {executionTime}s
      </p>

    </div>
  );
}

export default ReplayCard;