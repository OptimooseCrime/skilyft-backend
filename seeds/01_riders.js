
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('riders').del()
    .then(function () {
      // Inserts seed entries
      return knex('riders').insert([
        {id: 1, userName: 'Ben', destination: 'Vail', departing: '2018-05-10', time: 800, drive: true},
        {id: 2, userName: 'Jacob', destination: 'Copper Mountain', departing: '2018-05-08', time: 1000, drive: false},
        {id: 3, userName: 'Will', destination: 'Vail', departing: '2018-05-06', time: 800, drive: true},
        {id: 4, userName: 'Adam', destination: 'Arapahoe Basin', departing: '2018-05-06', time: 600, drive: false},
        {id: 5, userName: 'Austen', destination: 'Keystone', departing: '2018-05-12', time: 700, drive: true},
        {id: 6, userName: 'Snow Bunny', destination: 'Beaver Creek', departing: '2018-05-12', time: 700, drive: true}
      ])
      .then(() => {
        knex.raw('ALTER SEQUENCE riders_id_seq RESTART WITH 7;')
      })
    });
};
