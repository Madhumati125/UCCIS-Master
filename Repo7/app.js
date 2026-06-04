// app.js

const express =
  require("express");

const cors =
  require("cors");

const temporalRoutes =
  require("./routes/temporalRoutes");

const app =
  express();

// =====================================
// MIDDLEWARE
// =====================================

app.use(
  cors()
);

app.use(
  express.json()
);

// =====================================
// FRONTEND STATIC FILES
// =====================================

app.use(
  express.static("frontend")
);

// =====================================
// API ROUTES
// =====================================

app.use(

  "/temporal",

  temporalRoutes
);

// =====================================
// ROOT ROUTE
// =====================================

app.get(

  "/",

  (req, res) => {

    res.send(

      "UCCIS TANTRA CONVERGENCE SYSTEM RUNNING"
    );
  }
);

// =====================================
// SERVER
// =====================================

const PORT =
  3000;

app.listen(

  PORT,

  () => {

    console.log(

      `UCCIS running on port ${PORT}`
    );
  }
);