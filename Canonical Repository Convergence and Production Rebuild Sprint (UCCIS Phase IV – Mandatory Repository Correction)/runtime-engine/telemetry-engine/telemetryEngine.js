class TelemetryEngine {
  constructor() {
    this.metrics = [];
  }

  publishMetric(
    name,
    value
  ) {
    const metric = {
      metricId:
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

  getSummary() {
    return {
      totalMetrics:
        this.metrics.length,

      lastMetric:
        this.metrics[
          this.metrics.length - 1
        ] || null
    };
  }
}

module.exports =
  new TelemetryEngine();