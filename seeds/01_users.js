
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users";')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userName: 'Ben', password: 'raspberries'},
        {userName: 'Jacob', password: 'stawberries'},
        {userName: 'Will', password: 'blueberries'},
        {userName: 'Adam', password: 'elderberries'},
        {userName: 'Austen', password: 'lingonberries'}
      ]);
    });
};
