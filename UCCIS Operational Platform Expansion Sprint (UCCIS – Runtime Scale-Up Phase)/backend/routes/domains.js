const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      domain: "Flood"
    },
    {
      id: 2,
      domain: "Traffic"
    },
    {
      id: 3,
      domain: "Medical"
    },
    {
      id: 4,
      domain: "Power"
    },
    {
      id: 5,
      domain: "Cyber"
    },
    {
      id: 6,
      domain: "Water"
    }
  ]);
});

module.exports = router;