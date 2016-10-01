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

// options.hooks = {
//   afterCreate: function (transaction, options) {
//     return transaction.getAccount()
//       .then((account) => {
//         account.balance = account.balance + transaction.amount
//         return account.save()
//       }).then(() => {
//       console.log('update account successful')
//     }).catch((err) => {
//       console.log(err)
//     })
//   }
// }

module.exports = db.define('transaction', fields, options)
