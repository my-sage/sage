'use strict'

const Sequelize = require('Sequelize')
const db = require('../_db')

const fields = {}
const options = {}

fields.amount = {
  type: Sequelize.DOUBLE,
  allowNull: false
}

fields.date = {
  type: Sequelize.BIGINT, // Unixt time
  allowNull: false
}

fields.note = {
  type: Sequelize.STRING,
  allowNull: false,
  defaultValue: 'no comment'
}

module.exports = db.define('transaction', fields, options)
