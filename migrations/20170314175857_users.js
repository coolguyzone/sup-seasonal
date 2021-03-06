
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();

    table.string('username')
      .notNullable()
      .defaultTo('');

    table.string('email')
      .notNullable()
      .unique();

    table.specificType('hashed_password', 'char(60)')
      .notNullable();

    table.string('permissions')
      .notNullable()
      .defaultTo('');

    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
