class IncidentAlerts {

  createIncidentAlert(
    incidentId
  ) {

    return {

      incidentId,

      type: "INCIDENT",

      status: "TRIGGERED",

      timestamp:
        new Date()
    };
  }
}

module.exports =
  new IncidentAlerts();