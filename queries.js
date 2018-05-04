const knex = require("./database-connection")
const crypto = require('crypto')

module.exports = {
    createAccount(account){
      function hashMeOutside(str) {
        const hash = crypto.createHash('sha256')
        hash.update(str)
        return hash.digest('hex')
      }
      return knex('users')
      .insert([{password: hashMeOutside(account.password)}, {userName: account.userName}])
      .first()
      .returning('*')
    },
    matchCredentials(body){
      function hashMeOutside(str) {
        const hash = crypto.createHash('sha256')
        hash.update(str)
        return hash.digest('hex')
      }
      return knex('users')
      .where('password', hashMeOutside(body.password))
      .returning('*')
    },
    getAllRiders(){
      return knex('riders')
      .select()
    },
    viewRider(id){
      return knex('riders')
      .where('id', id)
      .first()
      .returning('*')
    },
    matchDestination(destination){
      return knex('riders')
      .where('destination', destination)
      .returning('*')
    },
    updateDriving(drive, id){
      return knex('riders')
      .where('id', id)
      .update(drive)
      .returning('*')
    },
    showDrivers(body){
      return knex('riders')
      .where('drive', true)
      if(body.drive === false){
        return body
        .returning('*')
      }
    },
    matchDate(departing){
      return knex('riders')
      .where('departing', departing)
      .returning('*')
    },
    addRider(body){
      return knex('riders')
      .insert(body)
      .returning('*')
      .then(newRider => newRider[0])
    },
    deleteRider(id){
      return ('riders')
      .where('id', id)
      .del()
    }
}
