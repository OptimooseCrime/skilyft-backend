const knex = require("./database-connection")

module.exports = {
    createAccount(account){
      return knex('users')
      .insert(account)
      .returning('*')
      .then(newAccount => newAccount[0])
    },
    matchCredentials(body){
      const users = knex('users')
      for(i = 0; i < users.length; i++){
        if(body == users[i]){
          return body
          .returning(body)
        }
      }
      return users
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
    }
}
