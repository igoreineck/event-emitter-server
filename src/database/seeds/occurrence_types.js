exports.seed = (knex) => {
  return knex("occurrence_types")
    .del()
    .then(() => {
      return knex("occurrence_types").insert([
        { name: "Falta de água" },
        { name: "Em obras" },
      ]);
    });
};
