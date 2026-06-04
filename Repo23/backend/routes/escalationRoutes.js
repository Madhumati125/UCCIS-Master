const express = require("express"); 
const router = express.Router(); 

const { getEscalations } = require("../controllers/escalationController"); 

router.get("/", getEscalations); 

module.exports = router;