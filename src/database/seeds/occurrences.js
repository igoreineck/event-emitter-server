const faker = require("Faker");

async function generateRandomOccurrences(knex) {
  let occurrences = [];

  const occurrenceType = await knex
    .from("occurrence_types")
    .where("name", "Falta de água")
    .first();

  for (let i = 0; i < 50; i++) {
    let occurrence = {
      name: `Nome teste ${i}`,
      description: `Descrição teste ${i}`,
      cep: faker.Address.zipCode("#####-###"),
      address: faker.Address.streetAddress(),
      end_date: faker.Date.future(5),
      occurrence_type_id: occurrenceType.id,
    };

    occurrences.push(occurrence);
  }

  return occurrences;
}

exports.seed = (knex) => {
  return knex("occurrences").then(async () => {
    const occurrences = await generateRandomOccurrences(knex);

    return knex("occurrences").insert(occurrences);
  });
};
