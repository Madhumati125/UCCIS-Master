function ReplayGrid({ lineage }) {

  return (
    <div className="panel">

      <div className="panel-title">
        REPLAY LINEAGE OPERATIONS
      </div>

      {lineage.map((item) => (

        <div
          key={item.id}
          className={
            item.corruptionAttempt
              ? "replay-card replay-danger"
              : "replay-card"
          }
        >

          <div>
            Confidence:
            {item.confidence}%
          </div>

          <div>
            Divergence:
            {item.divergence
              ? " DETECTED"
              : " STABLE"}
          </div>

          <div>
            Operator:
            {item.operatorDisconnected
              ? " DISCONNECTED"
              : " CONNECTED"}
          </div>

          <div>
            Replay:
            {item.outOfOrderArrival
              ? " OUT-OF-ORDER"
              : " SYNCHRONIZED"}
          </div>

          <div>
            Uncertainty:
            {item.uncertainty}
          </div>

        </div>

      ))}

    </div>
  );
}

export default ReplayGrid;