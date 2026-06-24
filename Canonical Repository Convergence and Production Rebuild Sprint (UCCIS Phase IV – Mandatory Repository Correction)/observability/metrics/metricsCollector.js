class MetricsCollector {

  constructor() {
    this.metrics = [];
  }

  addMetric(
    name,
    value
  ) {

    const metric = {
      id:
        "MET-" +
        Date.now(),

      name,

      value,

      timestamp:
        new Date()
    };

    this.metrics.push(metric);

    return metric;
  }

  getMetrics() {
    return this.metrics;
  }
}

module.exports =
  new MetricsCollector();