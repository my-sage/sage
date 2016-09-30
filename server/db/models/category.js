'use strict';

const Sequelize = require('sequelize');
const db = require('../_db');

const fields = {};
const options = {};

fields.name = {
  type: Sequelize.STRING,
  allowNull: false
};

fields.description = {
  type: Sequelize.TEXT,
}

module.exports = db.define('category', fields, options);
