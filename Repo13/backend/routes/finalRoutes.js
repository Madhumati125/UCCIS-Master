import express from "express";

import { runFinalReplay } from "../final/finalReplayEngine.js";
import { validateFinalReplay } from "../final/finalValidationEngine.js";

const router = express.Router();

router.get("/", (req, res) => {

  const replay = runFinalReplay();
  const validation = validateFinalReplay();

  res.json({
    success: true,
    replay,
    validation
  });

});

export default router;