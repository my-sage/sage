const chalk = require('chalk')
const db = require('./server/db')

const Account = db.model('account')
const Category = db.model('category')
const Transaction = db.model('transaction')
const Budget = db.model('budget')
const Merchant = db.model('merchant')
const Tag = db.model('tag')

db.sync({ force: true })
