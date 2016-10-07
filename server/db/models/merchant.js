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

module.exports = db.define('merchant', fields, options)
