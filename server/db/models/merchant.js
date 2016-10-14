'use strict'
const Sequelize = require('sequelize')
const db = require('../_db');
const Transaction = require('./transaction');
const Promise = require('bluebird');
const {
  assoc
} = require('ramda');

const fields = {}
const options = {}

fields.name = {
  type: Sequelize.STRING,
  unique: true,
  allowNull: false
}

options.instanceMethods = {
  updateWithTransactions: function(updatedMerchant) {
    return this.update(updatedMerchant)
      .then(merchant => {
        return merchant.getTransactions()
      })
      .then(transactions => {
        const updatedTransactions =
          transactions.map(t => {
            t.categoryId = updatedMerchant.categoryId;
            return t;
          });
        return Promise.map(updatedTransactions, t => t.save());
      })
      .then(updatedTransactions => Promise.map(updatedTransactions, (t) => t.reload()))
  }
}

module.exports = db.define('merchant', fields, options)
