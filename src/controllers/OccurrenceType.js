const OccurenceType = require("../models/OccurrenceType");

module.exports = {
  async index({ res }) {
    const occurrenceTypes = await OccurenceType.query();

    return res.json(occurrenceTypes);
  },

  async show(req, res) {
    const occurrenceType = await OccurenceType.query().findById(req.params.id);

    return res.json(occurrenceType);
  },

  async create(req, res) {
    const { name } = req.body;

    try {
      await OccurenceType.query().insert({ name: name });

      return res.status(201);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async update(req, res) {
    const occurrenceType = await OccurenceType.query().updateAndFetchById(
      req.params.id,
      req.body
    );

    return res.json(occurrenceType);
  },

  async destroy(req, res) {
    const occurrenceType = await OccurenceType.query().deleteById(
      req.params.id
    );

    return res.status(204).json(occurrenceType);
  },
};
