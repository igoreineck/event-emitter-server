const tableName = "occurrences";

exports.up = async (knex) => {
  if (await knex.schema.hasTable(tableName)) {
    return;
  }

  return await knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string("name", 255).notNullable();
    table.text("description");
    table.string("cep", 20).notNullable();
    table.string("address", 255).notNullable();
    table
      .datetime("start_date")
      .notNullable()
      .defaultTo(new Date().toISOString());
    table.datetime("end_date");
    table
      .integer("occurrence_type_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("occurrence_types")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamps();
  });
};

exports.down = async (knex) => {
  return await knex.schema.dropTableIfExists(tableName);
};
