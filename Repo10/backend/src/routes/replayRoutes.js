const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    replay: "Replay Engine Active"
  });
});

module.exports = router;