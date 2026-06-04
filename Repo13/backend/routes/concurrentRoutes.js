import express from "express";

import { runConcurrentSimulation } from "../concurrent/operatorSimulator.js";

import { generateReconciliationProof } from "../concurrent/reconciliationEngine.js";

const router = express.Router();

router.get("/", (req, res) => {

  const simulation = runConcurrentSimulation();

  const reconciliation = generateReconciliationProof();

  res.json({
    success: true,
    simulation,
    reconciliation
  });

});

export default router;