/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('city').notNullable();
    table.ineger('shelves').notNullable();
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('library');
};