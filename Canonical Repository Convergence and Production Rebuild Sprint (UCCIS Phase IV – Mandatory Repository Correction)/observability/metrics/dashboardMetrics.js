class DashboardMetrics {

  getDashboardSummary() {

    return {

      incidents: 120,

      escalations: 34,

      replays: 280,

      evidenceFiles: 150,

      signals: 450
    };
  }
}

module.exports =
  new DashboardMetrics();