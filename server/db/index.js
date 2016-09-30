'use strict'
const db = require('./_db')

module.exports = db

const Account = db.model('account')
const Category = db.model('category')
const Transaction = db.model('transaction')
const Budget = db.model('budget')
const Merchant = db.model('merchant')
const Tag = db.model('tag')

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

Tag.belongsToMany(Transaction)
Transaction.belongsToMany(Tag)
