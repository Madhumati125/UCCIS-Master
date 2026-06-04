const express = require("express");

const fs = require("fs");

const path = require("path");

const router = express.Router();

const {
  generateReplay,
  getLineage
} = require("../../replay-engine/replayCore");

const collectTelemetry =
  require("../../telemetry/telemetryCore");

/* LOG FUNCTION */

function writeLog(fileName, message) {

  const logPath = path.join(
    __dirname,
    "..",
    "..",
    "runtime_logs",
    fileName
  );

  /* CREATE FILE IF NOT EXISTS */

  if (!fs.existsSync(logPath)) {

    fs.writeFileSync(logPath, "");

  }

  const timestamp =
    new Date().toISOString();

  const finalMessage =
    `[${timestamp}] ${message}\n`;

  fs.appendFileSync(
    logPath,
    finalMessage
  );

}

/* GENERATE OPERATIONAL FLOW */

router.get("/generate", (req, res) => {

  const randomDelay =
    Math.floor(Math.random() * 3000);

  setTimeout(() => {

    const replay =
      generateReplay(
        "SIGNAL_RECEIVED"
      );

    /* SIGNAL */

    writeLog(
      "runtime.log",
      "Signal received"
    );

    /* REPLAY */

    writeLog(
      "replay.log",
      `Replay generated ${replay.id}`
    );

    /* CORRUPTION */

    if (
      replay.corruptionAttempt
    ) {

      writeLog(
        "corruption.log",
        `Corruption detected on replay ${replay.id}`
      );

    }

    /* RECOVERY */

    if (
      replay.recoveryTriggered
    ) {

      writeLog(
        "recovery.log",
        `Recovery sequencing triggered`
      );

    }

    /* DIVERGENCE */

    if (
      replay.divergence
    ) {

      writeLog(
        "divergence.log",
        `Replay divergence detected`
      );

    }

    /* RECONSTRUCTION */

    if (
      !replay.reconstructionFailed
    ) {

      writeLog(
        "recovery.log",
        `Replay reconstruction completed`
      );

    } else {

      writeLog(
        "recovery.log",
        `Replay reconstruction failed`
      );

    }

    /* GOVERNANCE */

    if (
      replay.governanceVisible
    ) {

      writeLog(
        "runtime.log",
        `Governance visibility active`
      );

    }

    /* AUDIT */

    writeLog(
      "runtime.log",
      `Audit continuity active`
    );

    res.json(replay);

  }, randomDelay);

});

/* LINEAGE */

router.get("/lineage", (req, res) => {

  res.json(
    getLineage()
  );

});

/* TELEMETRY */

router.get("/telemetry", (req, res) => {

  res.json(
    collectTelemetry()
  );

});

module.exports = router;