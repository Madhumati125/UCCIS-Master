const metrics={

  incidents:12,
  escalations:3,
  replayQueue:5,
  fieldDelays:7

};

function getMetrics(){
  return metrics;
}

module.exports={ getMetrics };