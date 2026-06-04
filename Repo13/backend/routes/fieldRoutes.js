import express from "express";

import { runFieldLifecycle } from "../field/fieldLifecycleEngine.js";
import { computeFieldAging } from "../field/agingEngine.js";

const router = express.Router();

router.get("/", (req, res) => {

  const lifecycle = runFieldLifecycle();
  const aging = computeFieldAging();

  res.json({
    success: true,
    lifecycle,
    aging
  });

});

export default router;