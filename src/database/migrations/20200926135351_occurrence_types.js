const tableName = "occurrence_types";

exports.up = async (knex) => {
  if (await knex.schema.hasTable(tableName)) {
    return;
  }

  return await knex.schema.createTable(tableName, (table) => {
    table.increments("id").primary();
    table.string("name", 50).notNullable().unique();
    table.timestamps();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists(tableName);
};
