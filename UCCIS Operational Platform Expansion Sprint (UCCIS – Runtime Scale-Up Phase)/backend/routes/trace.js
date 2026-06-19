const express = require("express");

const router = express.Router();

router.get("/:traceId", (req, res) => {
  res.json({
    traceId: req.params.traceId,
    signal: "SIG-1001",
    incident: "INC-1001",
    escalation: "ESC-1001",
    replay: "REP-1001"
  });
});

module.exports = router;