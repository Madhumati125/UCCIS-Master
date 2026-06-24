class AlertManager {

  sendAlert(
    title,
    severity
  ) {

    return {

      alertId:
        "ALT-" +
        Date.now(),

      title,

      severity,

      status: "SENT",

      timestamp:
        new Date()
    };
  }
}

module.exports =
  new AlertManager();