const express = require("express");
const router = express.Router();

const Escalation =
require("../models/Escalation");

router.get("/", async (req, res) => {

  try {

    const escalations =
      await Escalation.find()
      .sort({ createdAt: -1 });

    res.json(escalations);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;