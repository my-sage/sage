'use strict'
const db = require('./_db')

module.exports = db

const Category = require('./models/category')
const Account = require('./models/account')
const Transaction = require('./models/transaction')
const Budget = require('./models/budget')
const Merchant = require('./models/merchant')
const Tag = require('./models/tag')

Account.hasMany(Transaction)
Transaction.belongsTo(Account)

Transaction.belongsTo(Category)
Category.hasMany(Transaction)

Budget.belongsTo(Category)
Category.hasMany(Budget)

Merchant.hasMany(Transaction)
Transaction.belongsTo(Merchant)

Merchant.belongsTo(Category)
Category.hasMany(Merchant)

Tag.belongsToMany(Transaction, {through: 'tag_transaction'})
Transaction.belongsToMany(Tag, {through: 'tag_transaction'})
