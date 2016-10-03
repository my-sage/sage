'use strict'

const Sequelize = require('Sequelize')
const db = require('../_db')
const Account = require('./account')

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
  afterCreate: function(transaction, options) {
    // let updatingAccount = transaction.getAccount()
    //   .then(account => {
    //     account.balance = account.balance + transaction.amount
    //     return account.save()
    //   })

    // let updatingBudget = transaction.getCategory()
    //   .then(category => {
    //     return category.get
    //   })

    return transaction.getAccount()
      .then((account) => {
        account.balance = account.balance + transaction.amount
        return account.save()
      })
  }
}

module.exports = db.define('transaction', fields, options)
