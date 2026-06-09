require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// ======================
// MIDDLEWARE
// ======================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================
// ROUTES
// ======================
app.use("/api", require("./routes/floodRoutes"));

// ======================
// TEST ROUTE
// ======================
app.get("/", (req, res) => {
  res.json({
    status: "UCCIS RUNNING"
  });
});

// 🔥 ADD THIS: makes browser testing work too
app.get("/api/flood/execute", (req, res) => {
  res.json({
    success: true,
    message: "Flood endpoint is working",
    note: "Use POST method for real execution"
  });
});

// ======================
// SERVER START
// ======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});