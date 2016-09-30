'use strict';

const Sequelize = require('sequelize');
const db = require('../_db');

const fields = {};
const options = {};

fields.name = {
  type: Sequelize.STRING,
  allowNull: false
};

module.exports = db.define('tag', fields, options);
