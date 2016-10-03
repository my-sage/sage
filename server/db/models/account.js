'use strict';

const Sequelize = require('sequelize');
const db = require('../_db');

const fields = {};
const options = {};

fields.name = {
  type: Sequelize.STRING,
  allowNull: false
};

fields.type = {
  type: Sequelize.STRING,
  allowNull: false
}

fields.balance = {
  type: Sequelize.DOUBLE,
  defautValue: 0
}

fields.holder = {
  type: Sequelize.STRING,
  defautValue: 'self'
}

module.exports = db.define('account', fields, options);
