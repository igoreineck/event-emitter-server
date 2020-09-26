const knex = require("../database/db");
const { Model } = require("objection");

Model.knex(knex);

class OccurenceType extends Model {
  static get tableName() {
    return "occurrence_types";
  }
}

module.exports = OccurenceType;
