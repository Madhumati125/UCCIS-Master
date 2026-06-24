const express =
require("express");

const router =
express.Router();

const {
getObservability
} = require(
"../controllers/observabilityController"
);

router.get(
"/",
getObservability
);

module.exports = router;