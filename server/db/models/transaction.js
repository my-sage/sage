'use strict'

const Sequelize = require('sequelize');
const db = require('../_db');
const {
  map
} = require('ramda');
const Account = require('./account');
const Merchant = require('./merchant');
const Category = require('./category');
const Promise = require('bluebird');

const fields = {};
const options = {};

fields.amount = {
  type: Sequelize.DOUBLE,
  allowNull: false
};

fields.date = {
  type: Sequelize.BIGINT, // Unix time
  allowNull: false
};

fields.fitid = {
  type: Sequelize.STRING,
  allowNull: false
};

fields.type = {
  type: Sequelize.STRING,
  allowNull: false,
  defaultValue: 'no comment'
};

options.classMethods = {

  createOrFindWithMerchant: function(transactionWithExistingMerchant) {
    let {
      transaction,
      merchant
    } = transactionWithExistingMerchant;

    return Merchant.findOrCreate({
        where: merchant
      })
      .spread(createdMerchant => {
        return this.create(transaction)
          .then(createdTransaction => createdTransaction.setMerchant(createdMerchant))
          .then(ct => ct.reload())
          .then(transaction => {
            transaction.categoryId = transaction.merchant.categoryId;
            return transaction.save();
          })
      })
  },
  bulkCreateWithMerchant: function(transactions) {
    const createOnlyWhenUnique = (transaction) => {
      let {
        fitid
      } = transaction.transaction
      this.find({
          where: {
            fitid
          }
        })
        .then(found => !found ? this.createOrFindWithMerchant(transaction) : found)
    }
    return Promise.map(transactions, createOnlyWhenUnique)
  }
};

options.defaultScope = {
  include: [Merchant, Category]
};

options.instanceMethods = {

  getCurrentBudget: function() {
    let currentUnixTime = new Date().valueOf();
    return this.getCategory()
      .then(category => {
        return category ? category.getBudgets({
          where: {
            endDate: {
              $gt: currentUnixTime
            }
          }
        }) : [false]
      })
      .get(0)
  }
};

options.hooks = {

  beforeUpdate: function(transaction) {
    return transaction.getCurrentBudget()
      .then(budget => {
        if (budget) {
          budget.currentAmount = budget.currentAmount + transaction.amount;
          return budget.save();
        }
      });
  },

  afterUpdate: function(transaction) {
    return transaction.getCurrentBudget()
      .then(budget => {
        if (budget) {
          budget.currentAmount = budget.currentAmount - transaction.amount;
          return budget.save();
        }
      });
  },

  afterCreate: function(transaction) {
    const updatingBudget = transaction.getCurrentBudget()
      .then(budget => {
        if (budget) {
          budget.currentAmount = budget.currentAmount - transaction.amount
          return budget.save()
        }
      });
    if (transaction)
      return updatingBudget;
  }
};

options.indexes = [{
  unique: true,
  fields: ['fitid']
}]

module.exports = db.define('transaction', fields, options);
