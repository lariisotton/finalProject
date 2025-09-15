const knex = require('knex')

const connection = knex({
  client: 'mysql2', // qual banco 
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'estoque',
  },
});

module.exports = connection 