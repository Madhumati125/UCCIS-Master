const express =
require("express");

const router =
express.Router();

const {
getRuntime
} = require(
"../controllers/runtimeController"
);

router.get(
"/",
getRuntime
);

module.exports = router;