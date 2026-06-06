const express = require("express");
const router = express.Router();

const {
  createEscalation
} = require("../controllers/escalationController");

router.post("/create", createEscalation);

module.exports = router;