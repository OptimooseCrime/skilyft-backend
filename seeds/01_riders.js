
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('riders').del()
    .then(function () {
      // Inserts seed entries
      return knex('riders').insert([
        {id: 1, imageUrl:'https://s3-us-west-1.amazonaws.com/skilyft-photos/skilyft-ben.jpg', userName: 'Ben', firstName:'Ben', lastName:'Sullivan', vehicle:'2011 range rover sport', destination: 'Vail', departing: '2018-05-10', time: 800, drive: true},
        {id: 2, imageUrl:'https://s3-us-west-1.amazonaws.com/skilyft-photos/jacob.png', userName: 'Jacob', firstName:'Jacob', lastName:'Crane', vehicle:'2008 pontiac G5', destination: 'Copper Mountain', departing: '2018-05-08', time: 1000, drive: false},
        {id: 3, imageUrl:'https://s3-us-west-1.amazonaws.com/skilyft-photos/will.jpg', userName: 'Will', firstName:'Will', lastName:'Sheehan', vehicle:'2000 nissan pathfinder', destination: 'Vail', departing: '2018-05-06', time: 800, drive: true},
        {id: 4, imageUrl:'https://s3-us-west-1.amazonaws.com/skilyft-photos/Adam.png', userName: 'Adam', firstName:'Adam', lastName:'Basila', vehicle:'2001 toyota sequoia', destination: 'Arapahoe Basin', departing: '2018-05-06', time: 600, drive: false},
        {id: 5, imageUrl:'https://s3-us-west-1.amazonaws.com/skilyft-photos/austen.png', userName: 'Austen', firstName:'Austen', lastName:'Elswick', vehicle:'2006 mazda 3', destination: 'Keystone', departing: '2018-05-12', time: 700, drive: true},
        {id: 6, imageUrl:'https://s3-us-west-1.amazonaws.com/skilyft-photos/snowbunny.jpg', userName: 'Snow Bunny', firstName:'Trisha', lastName:'Basic', vehicle:'2001 volkswagon beetle', destination: 'Beaver Creek', departing: '2018-05-12', time: 700, drive: true}
      ])
      .then(() => knex.raw('ALTER SEQUENCE riders_id_seq RESTART WITH 7;'))
    });
};
