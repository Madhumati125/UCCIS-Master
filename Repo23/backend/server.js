const express = require("express"); 
const cors = require("cors"); 
const morgan = require("morgan"); 
const telemetryRoutes = require("./routes/telemetryRoutes"); 
const escalationRoutes = require("./routes/escalationRoutes"); 
const replayRoutes = require("./routes/replayRoutes"); 
const operatorRoutes = require("./routes/operatorRoutes"); 
const runtimeRoutes = require("./routes/runtimeRoutes"); 

const app = express(); app.use(cors()); 

app.use(express.json()); 

app.use(morgan("dev")); 

app.use("/api/telemetry", telemetryRoutes); 
app.use("/api/escalations", escalationRoutes); 
app.use("/api/replay", replayRoutes); 
app.use("/api/operators", operatorRoutes); app.use("/api/runtime", runtimeRoutes); app.get("/", (req, res) => { 
  res.json({ system: "UCCIS Operational Intelligence", status: "ACTIVE", uptime: process.uptime() 
  }); 
}); 

const PORT = 5000; 

app.listen(PORT, () => { console.log(`UCCIS Backend Running On ${PORT}`); });