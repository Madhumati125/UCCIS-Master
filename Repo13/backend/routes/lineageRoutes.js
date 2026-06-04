import express from "express";
import { validateLineage } from "../lineage/lineageValidator.js";

const router = express.Router();

router.get("/", (req, res) => {

  const result = validateLineage();

  res.json({
    success: true,
    lineage: result
  });

});

export default router;