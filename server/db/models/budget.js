'use strict'

const Sequelize = require('Sequelize')
const db = require('../_db')

const fields = {}
const options = {}

fields.name = {
  type: Sequelize.STRING,
  allowNull: false
}

fields.targetAmount = {
  type: Sequelize.DOUBLE,
  allowNull: false,
  defaultValue: 0
}

fields.currentAmount = {
  type: Sequelize.DOUBLE,
  allowNull: false,
  defaultValue: 0
}

fields.type = {
  // type: Sequelize.ENUM('income', 'spending'),
  type: Sequelize.STRING,
  allowNull: false
}

fields.endDate = {
  type: Sequelize.BIGINT
}

let hooks = {}
options.hooks = hooks;


hooks.beforeCreate = function(budget) {
  let currentTime = new Date()
  let endOfMonth = new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 0)
  budget.endDate = endOfMonth.valueOf()
}

hooks.afterCreate = function(budget) {
  budget.getCurrentTransactions()
    .then(transactions => {
      console.log('getting the active transactions of this month', transactions)
      let totalTransactionAmount = transactions.reduce((pre,transaction) => {return pre+transaction.amount},0)
      budget.currentAmount = budget.currentAmount - totalTransactionAmount
      return budget.save()
    })
}

let classMethods = {};
classMethods.getCurrentBudgets = function() {
  let currentUnixTime = new Date().valueOf();
  return this.findAll({
    where: {
      endDate: {
        $gt: currentUnixTime
      }
    }
  })
}
options.classMethods = classMethods;

let instanceMethods = {};
instanceMethods.getCurrentTransactions = function () {
  let currentTime = new Date()
  let beginOfMonth = new Date(currentTime.getFullYear(), currentTime.getMonth(), 0).valueOf()

  return this.getCategory()
    .then(category => {
      return category.getTransactions({
        where: {
          date: {$gt: beginOfMonth}
        }
      })
    })
}
options.instanceMethods = instanceMethods

module.exports = db.define('budget', fields, options)
