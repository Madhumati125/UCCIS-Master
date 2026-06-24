const Incident =
  require("../models/Incident");

exports.getIncidents =
  async (req, res) => {
    const incidents =
      await Incident.find();

    res.json(incidents);
  };

exports.createIncident =
  async (req, res) => {
    const incident =
      await Incident.create(
        req.body
      );

    res.status(201).json(
      incident
    );
  };