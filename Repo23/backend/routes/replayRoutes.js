const express = require("express"); 
const router = express.Router(); 

const { getReplayEvents } = require("../controllers/replayController"); 

router.get("/", getReplayEvents); 

module.exports = router;