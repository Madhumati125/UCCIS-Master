require("dotenv").config();

const express = require("express");

const cors = require("cors");

const replayRoutes = require(
  "./routes/replayRoutes"
);

const lifecycleRoutes = require(
  "./routes/lifecycleRoutes"
);

const concurrencyRoutes = require(
  "./routes/concurrencyRoutes"
);

const enforcementRoutes = require(
  "./routes/enforcementRoutes"
);

const failureRoutes = require(
  "./routes/failureRoutes"
);

const observabilityRoutes = require(
  "./routes/observabilityRoutes"
);

const operationalRoutes = require(
  "./routes/operationalRoutes"
);

const recoveryService = require(
  "./services/recoveryService"
);

const app = express();

app.use(cors());

app.use(express.json());

recoveryService.initializeRecovery();

app.use("/replay", replayRoutes);

app.use("/lifecycle", lifecycleRoutes);

app.use("/concurrency", concurrencyRoutes);

app.use("/enforcement", enforcementRoutes);

app.use("/failure", failureRoutes);

app.use(
  "/observability",
  observabilityRoutes
);

app.use(
  "/operations",
  operationalRoutes
);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Operational UCCIS Running On ${PORT}`
  );
});