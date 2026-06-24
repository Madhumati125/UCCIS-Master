class EscalationAlerts {

  createEscalationAlert(
    escalationId
  ) {

    return {

      escalationId,

      type: "ESCALATION",

      status: "TRIGGERED",

      timestamp:
        new Date()
    };
  }
}

module.exports =
  new EscalationAlerts();