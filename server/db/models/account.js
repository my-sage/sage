'use strict'

const Sequelize = require('sequelize');
const db = require('../_db');
const {
  encrypt,
  decrypt
} = require('../../utils');

const fields = {};
const options = {};

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

//routing number
fields.bankId = {
  type: Sequelize.STRING,
  defaultValue: ''
}

fields.user = {
  type: Sequelize.STRING
}

fields.password = {
  type: Sequelize.STRING
}

fields.accId = {
  type: Sequelize.STRING
}

options.instanceMethods = {
  decrypt: function(key) {
    const bankDetails = {};
    bankDetails.bankId = this.Model.decrypt(this.bankId, key);
    bankDetails.user = this.Model.decrypt(this.user, key);
    bankDetails.password = this.Model.decrypt(this.password, key);
    bankDetails.accId = this.Model.decrypt(this.accId, key);
    bankDetails.name = this.name;
    bankDetails.id = this.id;
    return bankDetails;
  },
  encrypt: function(key) {
    this.bankId = this.Model.encrypt(this.bankId, key);
    this.user = this.Model.encrypt(this.user, key);
    this.password = this.Model.encrypt(this.password, key);
    this.accId = this.Model.encrypt(this.accId, key);
    return this.save();
  }
};

options.classMethods = {
  encrypt,
  decrypt
};

module.exports = db.define('account', fields, options)
