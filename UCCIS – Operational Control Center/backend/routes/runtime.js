const express = require("express");
const router = express.Router();

const {
  getRuntimeLogs,
  getRuntimeStats
} = require("../controllers/runtimeController");

router.get("/", getRuntimeLogs);
router.get("/stats", getRuntimeStats);

module.exports = router;