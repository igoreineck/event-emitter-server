const { Model } = require("objection");

class Occurence extends Model {
  static get tableName() {
    return "occurrences";
  }

  static get relationMappings() {
    const OccurrenceType = require("./OccurrenceType");

    return {
      occurrences: {
        relation: Model.HasOneRelation,
        modelClass: OccurrenceType,
        join: {
          from: "occurrences.occurrence_type_id",
          to: "occurrence_types.id",
        },
      },
    };
  }
}

module.exports = Occurence;
