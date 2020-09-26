const express = require("express");

const routes = new express.Router();

const OccurrenceTypeController = require("./controllers/OccurrenceType");
const OccurrenceController = require("./controllers/Occurrence");

routes.get("/occurrence_types", OccurrenceTypeController.index);
routes.get("/occurrence_types/:id", OccurrenceTypeController.show);
routes.post("/occurrence_types", OccurrenceTypeController.create);
routes.put("/occurrence_types/:id", OccurrenceTypeController.update);
routes.delete("/occurrence_types/:id", OccurrenceTypeController.destroy);

routes.get("/occurrences", OccurrenceController.index);
routes.get("/occurrences/:id", OccurrenceController.show);
routes.post("/occurrences", OccurrenceController.create);
routes.put("/occurrences/:id", OccurrenceController.update);
routes.delete("/occurrences/:id", OccurrenceController.destroy);

module.exports = routes;
