const runtimeData = require("../data/runtimeData");

const getIncidents = (req, res) => {
  res.json(runtimeData.incidents);
};

const getIncidentById = (req, res) => {
  const incident = runtimeData.incidents.find(
    (i) => i.id === req.params.id
  );

  if (!incident) {
    return res.status(404).json({
      message: "Incident not found",
    });
  }

  res.json(incident);
};

module.exports = {
  getIncidents,
  getIncidentById,
};