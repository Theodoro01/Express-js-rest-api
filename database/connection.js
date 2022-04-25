const dotenv = require('dotenv')

var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : process.env.SECRET_PASSWORD,
      database : 'usertest'
    }
  });

module.exports = knex