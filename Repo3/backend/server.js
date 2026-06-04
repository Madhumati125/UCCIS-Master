const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const intelligenceRoutes = require("./routes/intelligenceRoutes");
app.use("/api", intelligenceRoutes);

app.use(express.json());

// route
app.use("/api/intelligence", intelligenceRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});