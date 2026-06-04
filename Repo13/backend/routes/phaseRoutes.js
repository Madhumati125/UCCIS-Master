import express from "express";

import {
  getReplay,
  getConcurrency,
  getCorruption,
  getLineage,
  getEnforcement,
  getField,
  getStability,
  getGovernance,
  getFailure,
  getFinal
} from "../controllers/phaseController.js";

const router = express.Router();

router.get("/replay", getReplay);

router.get("/concurrency", getConcurrency);

router.get("/corruption", getCorruption);

router.get("/lineage", getLineage);

router.get("/enforcement", getEnforcement);

router.get("/field", getField);

router.get("/stability", getStability);

router.get("/governance", getGovernance);

router.get("/failure", getFailure);

router.get("/final", getFinal);

export default router;