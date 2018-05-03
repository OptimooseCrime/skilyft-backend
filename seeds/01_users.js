
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users";')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userName: 'Ben', password: 'cc1d86b81a087c9a92cda82911e1efa303b138fd084483d6a0dedff2a53e1f7d'},
        {userName: 'Jacob', password: '37bc3d200953efe08f8c3e536d934115be2576a42d76862aee34a7c7cf008582'},
        {userName: 'Will', password: '550b8ce3d164393f314eb1ba5a8cc74face29b90f9c94242c7182c448aa6a4c1'},
        {userName: 'Adam', password: 'c510e70ed62005c31e9e9759311b8e8b9a5e6efe75caa964302b6535ec5549e1'},
        {userName: 'Austen', password: 'fd2906ec20c4fe5c46b828dd05671f9589fd3886300e0316ed4da2541406d345'}
      ]);
    });
};
