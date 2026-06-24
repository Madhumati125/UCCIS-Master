const Escalation =
  require("../models/Escalation");

exports.getEscalations =
  async (req, res) => {
    const escalations =
      await Escalation.find();

    res.json(escalations);
  };

exports.createEscalation =
  async (req, res) => {
    const escalation =
      await Escalation.create(
        req.body
      );

    res.status(201).json(
      escalation
    );
  };