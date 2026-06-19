const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    period: {
      last24Hours: 12,
      last7Days: 56,
      last30Days: 178
    }
  });
});

module.exports = router;