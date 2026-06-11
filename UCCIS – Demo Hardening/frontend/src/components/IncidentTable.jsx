import React from "react";

const IncidentTable = ({ incidents = [] }) => {
  if (!incidents.length) {
    return (
      <div className="card">
        <h2>Recent Incidents</h2>
        <p>No incidents available.</p>
      </div>
    );
  }

  const columns = Object.keys(incidents[0]);

  return (
    <div className="card">
      <h2>Recent Incidents</h2>

      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {incidents.map((incident, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>
                  {incident[column] === null ||
                  incident[column] === undefined
                    ? "-"
                    : typeof incident[column] === "object"
                    ? JSON.stringify(
                        incident[column]
                      )
                    : incident[column].toString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          marginTop: "20px"
        }}
      >
        <h3>Raw API Response</h3>

        <pre
          style={{
            background: "#0f172a",
            padding: "15px",
            borderRadius: "8px",
            overflowX: "auto"
          }}
        >
          {JSON.stringify(
            incidents,
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};

export default IncidentTable;