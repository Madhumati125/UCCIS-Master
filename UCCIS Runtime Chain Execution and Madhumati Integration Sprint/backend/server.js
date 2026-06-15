const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const runtimeRoutes = require("./routes/runtimeRoutes");
const replayRoutes = require("./routes/replayRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    service: "UCCIS Runtime Chain Engine",
    version: "1.0.0",
    status: "RUNNING",
    endpoints: [
      "/api/execute-signal",
      "/api/replay/:traceId",
      "/api/dashboard"
    ]
  });
});

app.use("/api", runtimeRoutes);
app.use("/api", replayRoutes);
app.use("/api", dashboardRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    error: err.message || "Internal Server Error"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
=================================================
 UCCIS Runtime Chain Engine Started
=================================================
 Server : http://localhost:${PORT}
 Status : RUNNING
=================================================
`);
});