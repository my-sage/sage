const Sequelize = require('sequelize')
const db = new Sequelize('sage', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
})

module.exports = db
