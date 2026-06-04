const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const intelligenceRoutes = require("./routes/intelligenceRoutes");
const executionRoutes = require("./routes/executionRoutes");

app.use("/", intelligenceRoutes);
app.use("/", executionRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});