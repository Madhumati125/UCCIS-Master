const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: "EVD-1001",
      traceId: "TRACE-1001",
      source: "Sensor",
      description: "Water level threshold exceeded"
    }
  ]);
});

module.exports = router;