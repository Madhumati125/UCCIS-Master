function replayState(history) {
  return {
    total_snapshots: history.length,
    timeline: history.map((h) => ({
      time: h.timestamp,
      risk: h.risk?.level || "NA",
      score: h.risk?.score || 0,
    })),
  };
}

module.exports = { replayState };