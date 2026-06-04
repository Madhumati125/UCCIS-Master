function detectAnomalies(data) {
  let anomalies = [];

  data.forEach((d) => {
    if (d.domain === "rain" && d.value < 10) {
      anomalies.push("Rain anomaly detected");
    }

    if (!d.source) {
      anomalies.push("Missing source field");
    }
  });

  return anomalies;
}

module.exports = { detectAnomalies };