const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    execution: "Execution System Running"
  });
});

module.exports = router;