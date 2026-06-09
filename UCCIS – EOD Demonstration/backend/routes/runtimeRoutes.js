const express = require("express");
const router = express.Router();

const {
  executeFloodScenario
} = require("../controllers/runtimeController");

router.get(
  "/flood-scenario",
  executeFloodScenario
);

module.exports = router;