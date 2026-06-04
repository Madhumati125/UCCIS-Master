const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    workflow: "Governance Workflow Active"
  });
});

module.exports = router;