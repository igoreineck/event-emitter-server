require("dotenv").config();

module.exports = {
  development: {
    client: process.env.DB_TYPE,
    connection: {
      host: "127.0.0.1",
      user: "igor",
      password: "teste123",
      database: "event_emitter",
      charset: "utf8",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },
};
