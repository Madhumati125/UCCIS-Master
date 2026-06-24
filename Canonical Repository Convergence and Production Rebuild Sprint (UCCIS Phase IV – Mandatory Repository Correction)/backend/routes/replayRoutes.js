const express =
  require("express");

const router =
  express.Router();

const {
  getReplays,
  createReplay
} = require(
  "../controllers/replayController"
);

router.get("/", getReplays);

router.post(
  "/",
  createReplay
);

module.exports = router;