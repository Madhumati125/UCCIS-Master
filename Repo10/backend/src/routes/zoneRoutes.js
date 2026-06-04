const router = require("express").Router();

router.get("/", async (req, res) => {
  res.json({
    success: true,
    zones: [
      {
        zone: "South Mumbai",
        flooding: "MEDIUM"
      },
      {
        zone: "Andheri",
        flooding: "HIGH"
      }
    ]
  });
});

module.exports = router;