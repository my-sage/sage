'use strict'
const Sequelize = require('Sequelize')
const db = require('../_db')

const fields = {}
const options = {}

fields.name = {
  type: Sequelize.STRING,
  allowNull: false
}

module.exports = db.define('merchant', fields, options)
