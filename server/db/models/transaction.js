'use strict'

const Sequelize = require('Sequelize')
const db = require('../_db')
const Account = require('./account')
const Merchant = require('./merchant')

const fields = {}
const options = {}

fields.amount = {
  type: Sequelize.DOUBLE,
  allowNull: false
}

fields.date = {
  type: Sequelize.BIGINT, // Unix time
  allowNull: false
}

fields.note = {
  type: Sequelize.STRING,
  allowNull: false,
  defaultValue: 'no comment'
}

options.classMethods = {

  createOrFindWithMerchant: function(transactionWithExistingMerchant) {
    let {
      transaction,
      merchant
    } = transactionWithExistingMerchant

    return Merchant.findOrCreate({
        where: merchant
      })
      .spread(createdMerchant => {
        return this.create(transaction)
          .then(createdTransaction => createdTransaction.setMerchant(createdMerchant))
          .then((createdTransaction) => {
            createdTransaction.merchant = createdMerchant
            return createdTransaction
          })
      })
  }
}

options.instanceMethods = {

  getCurrentBudget: function() {
    let currentUnixTime = new Date().valueOf()
    return this.getCategory()
      .then(category => {
        return category.getBudgets({
          where: {
            endDate: {
              $gt: currentUnixTime
            }
          }
        })
      })
      .then(budgets => budgets[0])
  }
}

options.hooks = {

  afterCreate: function(transaction) {
    let updatingAccount = transaction.getAccount()
      .then(account => {
        account.balance = account.balance + transaction.amount
        return account.save()
      })

    let updatingBudget = transaction.getCurrentBudget()
      .then(budget => {
        if (budget) {
          budget.currentAmount = budget.currentAmount - transaction.amount
          return budget.save()
        }
      })

    return Promise.all([updatingAccount, updatingBudget])
  }
}

module.exports = db.define('transaction', fields, options)
