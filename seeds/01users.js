exports.seed = function(knex, Promise) {
  //DELETES EXISTING ENTRIES
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          username: 'alex',
          email: 'alexanderkrawiec@gmail.com',
          hashed_password: 'blah',
          permissions: 'super_user'

      }])
      .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
      });
    });
};
