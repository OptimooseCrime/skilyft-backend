const knex = require("./database-connection")

module.exports = {
    createAccount(account){
      return knex('users')
      .insert(account)
      .returning('*')
      .then(newAccount => newAccount[0])
    },
    matchCredentials(body){
      const users = return knex('users')
      for(i = 0; i < users.length; i++){
        if(body == users[i]){
          return body
          .returning(body)
        }
      }
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
    }
}
