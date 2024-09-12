/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const bcrypt = require("bcrypt");

exports.seed = async function (knex) {
  await knex("members").del();
  await knex("members").insert([
    {
      code: "M001",
      name: "Angga",
      password: await bcrypt.hash("password", 10)
    },
    {
      code: "M002",
      name: "Ferry",
      password: await bcrypt.hash("password", 10)
    },
    {
      code: "M003",
      name: "Putri",
      password: await bcrypt.hash("password", 10)
    },
  ]);
};
