const express = require("express");
const router = express.Router();

const Evidence =
require("../models/Evidence");

router.get("/", async (req, res) => {

  try {

    const evidence =
      await Evidence.find()
      .sort({ createdAt: -1 });

    res.json(evidence);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;