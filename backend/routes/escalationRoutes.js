const express =
  require("express");

const router =
  express.Router();

const {
  getEscalations,
  createEscalation
} = require(
  "../controllers/escalationController"
);

router.get(
  "/",
  getEscalations
);

router.post(
  "/",
  createEscalation
);

module.exports = router;