const db = require("../config/db");
const decisionService = require("./decisionService");

exports.createEscalation = async (
  incidentId,
  signal
) => {
  try {
    let assignedTeam = "Control Room";

    switch (signal.signal_type) {
      case "Flood Alert":
        assignedTeam = "Disaster Response";
        break;

      case "Traffic Incident":
        assignedTeam = "Traffic Control";
        break;

      case "Cyber Incident":
        assignedTeam = "Cyber Security";
        break;

      case "Power Failure":
        assignedTeam = "Power Operations";
        break;

      case "Medical Emergency":
        assignedTeam = "Medical Command";
        break;
    }

    await db.promise().query(
      `
      INSERT INTO escalations
      (
        incident_id,
        escalation_level,
        assigned_team
      )
      VALUES (?,?,?)
      `,
      [
        incidentId,
        "LEVEL-1",
        assignedTeam
      ]
    );

    await decisionService.generateDecision(
      incidentId,
      signal
    );
  } catch (error) {
    console.log(error);
  }
};