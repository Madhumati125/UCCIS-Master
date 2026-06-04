const router = require("express").Router();

router.get("/live", (req, res) => {
  res.json({
    success: true,
    signal: "Weather Feed Active"
  });
});

module.exports = router;