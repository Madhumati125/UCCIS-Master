import express from "express";
import cors from "cors";

import replayRoutes from "./routes/replayRoutes.js";
import concurrentRoutes from "./routes/concurrentRoutes.js";
import corruptionRoutes from "./routes/corruptionRoutes.js";
import lineageRoutes from "./routes/lineageRoutes.js";
import enforcementRoutes from "./routes/enforcementRoutes.js";
import fieldRoutes from "./routes/fieldRoutes.js";
import stabilityRoutes from "./routes/stabilityRoutes.js";
import finalRoutes from "./routes/finalRoutes.js";
import phaseRoutes from "./routes/phaseRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/replay", replayRoutes);
app.use("/api/concurrent", concurrentRoutes);
app.use("/api/corruption", corruptionRoutes);
app.use("/api/lineage", lineageRoutes);
app.use("/api/enforcement", enforcementRoutes);
app.use("/api/field", fieldRoutes);
app.use("/api/stability", stabilityRoutes);
app.use("/api/final", finalRoutes);
app.use("/api", phaseRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("UCCIS Replay Engine Running");
});