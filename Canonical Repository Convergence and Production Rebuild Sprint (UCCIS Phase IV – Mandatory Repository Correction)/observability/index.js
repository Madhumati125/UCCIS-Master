module.exports = {

  logger:
    require("./logging/logger"),

  fileLogger:
    require("./logging/fileLogger"),

  auditLogger:
    require("./logging/auditLogger"),

  metricsCollector:
    require(
      "./metrics/metricsCollector"
    ),

  runtimeMetrics:
    require(
      "./metrics/runtimeMetrics"
    ),

  dashboardMetrics:
    require(
      "./metrics/dashboardMetrics"
    ),

  traceManager:
    require(
      "./tracing/traceManager"
    ),

  traceStore:
    require(
      "./tracing/traceStore"
    ),

  tracePropagation:
    require(
      "./tracing/tracePropagation"
    ),

  alertManager:
    require(
      "./alerts/alertManager"
    ),

  incidentAlerts:
    require(
      "./alerts/incidentAlerts"
    ),

  escalationAlerts:
    require(
      "./alerts/escalationAlerts"
    )
};