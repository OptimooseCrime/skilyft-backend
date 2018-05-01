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
    // matchDestination(body){
    //   console.log(body);
    // }
}
