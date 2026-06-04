import express from "express";

import { simulateCorruption } from "../corruption/corruptionSimulator.js";

import { validateRecovery } from "../corruption/recoveryValidator.js";

const router = express.Router();

router.get("/", (req, res) => {

  const corruption = simulateCorruption();

  const recovery = validateRecovery();

  res.json({
    success: true,
    corruption,
    recovery
  });

});

export default router;