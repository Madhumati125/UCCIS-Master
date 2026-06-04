const fs = require("fs");
const path = require("path");

function storeReplaySignal(signal) {

  const replayDir = path.join(__dirname);

  if (!fs.existsSync(replayDir)) {
    fs.mkdirSync(replayDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(replayDir, `${signal.replay_safe_id}.json`),
    JSON.stringify(signal, null, 2)
  );

}

module.exports = storeReplaySignal;