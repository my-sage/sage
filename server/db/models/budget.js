'use strict'

const Sequelize = require('Sequelize')
const db = require('../_db')

const fields = {}
const options = {}

fields.name = {
  type: Sequelize.BIGINT,
  allowNull: false
}

fields.targetAmount = {
  type: Sequelize.DOUBLE,
  allowNull: false,
  defaultValue: 0
}

fields.currentAmount = {
  type: Sequelize.DOUBLE,
  allowNull: false,
  defaultValue: 0
}

fields.type = {
  type: Sequelize.ENUM('income', 'spending'),
  allowNull: false
}

fields.date = {
  type: Sequelize.BIGINT,
  allowNull: false
}

module.exports = db.define('budget', fields, options)
