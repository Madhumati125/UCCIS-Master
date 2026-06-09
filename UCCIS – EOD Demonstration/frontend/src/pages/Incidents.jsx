import { useEffect, useState } from "react";
import API from "../services/api";
import IncidentChart from "../components/Charts/IncidentChart";

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    loadIncidents();
  }, []);

  const loadIncidents = async () => {
    const res = await API.get("/incidents");
    setIncidents(res.data.data || []);
  };

  return (
    <>
      <IncidentChart />

      <div className="card">
        <h2>Incidents</h2>

        {incidents.map((item) => (
          <div key={item.incident_id}>
            <p>ID: {item.incident_id}</p>
            <p>Severity: {item.severity}</p>
            <hr />
          </div>
        ))}

        <pre>{JSON.stringify(incidents, null, 2)}</pre>
      </div>
    </>
  );
};

export default Incidents;