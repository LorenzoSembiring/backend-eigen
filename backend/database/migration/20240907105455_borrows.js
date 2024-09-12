/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("borrows", function (table) {
    table.increments("id").unique().primary();
    table.string("book_code").notNullable().index().references('code').inTable('books');
    table.string("member_code").notNullable().index().references('code').inTable('members');;
    table.string("status").notNullable();
		table.date("borrow_date").notNullable();
		table.date("return_date").nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
