/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("members", function (table) {
    table.string("code").index().primary();
    table.string("name").notNullable();
    table.string("password").notNullable();
    table.string("status").nullable();
    table.date("penalty_date").nullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
