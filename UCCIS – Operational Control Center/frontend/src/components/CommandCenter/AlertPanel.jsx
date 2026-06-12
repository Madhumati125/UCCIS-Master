const AlertPanel = () => {
  return (
    <div className="panel">

      <h2>Alerts</h2>

      <div className="alert danger">
        Flood Alert Active
      </div>

      <div className="alert warning">
        Escalation Pending
      </div>

      <div className="alert success">
        Database Connected
      </div>

      <div className="alert info">
        Runtime Active
      </div>

    </div>
  );
};

export default AlertPanel;