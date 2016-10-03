'use strict'

const Sequelize = require('Sequelize');
const db = require('../_db');

const fields = {};
const options = {};

fields.name = {
  type: Sequelize.STRING,
  allowNull: false
};

fields.targetAmount = {
  type: Sequelize.DOUBLE,
  allowNull: false,
  defaultValue: 0
};

fields.currentAmount = {
  type: Sequelize.DOUBLE,
  allowNull: false,
  defaultValue: 0
};

fields.type = {
  // type: Sequelize.ENUM('income', 'spending'),
  type: Sequelize.STRING,
  allowNull: false
};

fields.endDate = {
  type: Sequelize.BIGINT
};

let hooks = {};
options.hooks = hooks;

hooks.beforeCreate = function (budget) {
  let currentTime = new Date();
  let endOfMonth = new Date(currentTime.getFullYear(), currentTime.getMonth()+1, 0)
  budget.endDate = endOfMonth.valueOf()
};

module.exports = db.define('budget', fields, options);