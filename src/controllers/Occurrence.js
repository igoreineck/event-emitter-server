const Occurrence = require("../models/Occurrence");

module.exports = {
  async index({ res }) {
    const occurrences = await Occurrence.query();

    return res.json(occurrences);
  },

  async show(req, res) {
    const occurrence = await Occurrence.query().findById(req.params.id);

    return res.json(occurrence);
  },

  async create(req, res) {
    try {
      const occurrence = await Occurrence.query().insert(req.body);

      req.io.emit("occurrences", occurrence);

      return res.status(201).json();
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async update(req, res) {
    const occurrence = await Occurrence.query().updateAndFetchById(
      req.params.id,
      req.body
    );

    return res.json(occurrence);
  },

  async destroy(req, res) {
    const occurrence = await Occurrence.query().deleteById(req.params.id);

    return res.status(204).json(occurrence);
  },
};
