/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('books', function (table) {
        table.increments('id').primary();
        table.string('title');
        table.string('author');
        table.integer('year');  
    }).then(() => { console.log("migrated up") }) ;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('books');
};
