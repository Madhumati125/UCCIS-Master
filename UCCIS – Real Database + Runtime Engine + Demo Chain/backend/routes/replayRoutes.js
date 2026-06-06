const express = require("express");
const router = express.Router();

const {
  generateReplay
} = require("../controllers/replayController");

router.post("/generate", generateReplay);

module.exports = router;