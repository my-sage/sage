const Sequelize = require('sequelize')
const db = new Sequelize('postgres://127.0.0.5432/sage' , {logging: false})

module.exports = db
