const express = require("express");
const router = express.Router();

const {
  getRuntimeChain,
  getRuntimeSummary
} = require("../controllers/runtimeController");

router.get("/chain", getRuntimeChain);
router.get("/summary", getRuntimeSummary);

module.exports = router;