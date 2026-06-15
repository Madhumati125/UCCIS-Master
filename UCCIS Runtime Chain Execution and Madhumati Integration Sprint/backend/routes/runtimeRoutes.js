const express = require("express");
const router = express.Router();

const {
  executeSignal
} = require("../controllers/runtimeController");

router.post(
  "/execute-signal",
  executeSignal
);

module.exports = router;