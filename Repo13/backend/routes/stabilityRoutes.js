import express from "express";

import { runObservabilityInspector } from "../stability/observabilityEngine.js";
import { validateStability } from "../stability/stabilityValidator.js";

const router = express.Router();

router.get("/", (req, res) => {

  const nodes = runObservabilityInspector();
  const validation = validateStability();

  res.json({
    success: true,
    nodes,
    validation
  });

});

export default router;