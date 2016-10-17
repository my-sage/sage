'use strict';

const crypto = require('crypto-js');
const _ = require('lodash');
const Sequelize = require('sequelize');
const {
  genSalt,
  sha256Digest
} = require('../../utils');

const db = require('../_db');

const setSaltAndPassword = (user) => {
  if(user.changed('password')) {
    user.salt = user.Model.generateSalt();
    user.password = user.Model.hashPassword(user.password, user.salt);
  }
};

const fields = {}
  , options = {};

fields.password = {
  type: Sequelize.STRING
};

fields.salt = {
  type: Sequelize.STRING
};

fields.email = {
  type: Sequelize.STRING
};

options.instanceMethods = {
  sanitize: function() {
    return _.omit(this.toJSON(), ['password', 'salt']);
  },
  correctPassword: function(candidatePassword) {
    return this.Model.hashPassword(candidatePassword, this.salt) === this.password;
  }
};

options.classMethods = {
  generateSalt: () => genSalt(16),
  hashPassword: (plainText, salt) => sha256Digest(plainText + salt)
};

options.hooks = {
  beforeCreate: setSaltAndPassword,
  beforeUpdate: setSaltAndPassword
}

module.exports = db.define('user', fields, options);
