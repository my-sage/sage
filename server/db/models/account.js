'use strict'

const Sequelize = require('sequelize')
const db = require('../_db')

const fields = {}
const options = {}

fields.name = {
  type: Sequelize.STRING,
  unique: true,
  allowNull: false
}

fields.type = {
  type: Sequelize.STRING,
  allowNull: false
}

fields.balance = {
  type: Sequelize.DOUBLE,
  defaultValue: 0
}

fields.holder = {
  type: Sequelize.STRING,
  defaultValue: 'self'
}

module.exports = db.define('account', fields, options)
