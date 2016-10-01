const chalk = require('chalk')
const db = require('./server/db')
const Promise = require('sequelize').Promise

const Account = db.model('account')
const Category = db.model('category')
const Transaction = db.model('transaction')
const Budget = db.model('budget')
const Merchant = db.model('merchant')
const Tag = db.model('tag')

// ----------------------------------------------------------------------------------//
function seedAccount () {
  console.log(chalk.yellow('seeding account.'))

  let accountObjs = [
    {name: 'Visa', type: 'Debit'},
    {name: 'American Express', type: 'Credit'},
    {name: 'Chase', type: 'Credit'},
    {name: 'PNC', type: 'Debit'},
    {name: 'Bank of America', type: 'Credit'},
    {name: 'Citigroup', type: 'Credit'}
  ]
  let creatingAccounts = accountObjs.map(accountObj => Account.create(accountObj))

  return Promise.all(creatingAccounts)
}

// -------------------------------------------------------------------------------------//
function seedCategory () {
  console.log(chalk.yellow('Seeding Category'))

  let categoryObjs = [
    {name: 'Education'},
    {name: 'Insurance'},
    {name: 'Travel'},
    {name: 'Groceries'},
    {name: 'Mortgage'},
    {name: 'Electronics'}
  ]
  let creatingCategory = categoryObjs.map(categoryObj => Category.create(categoryObj))

  return Promise.all(creatingCategory)
}

// -------------------------------------------------------------------------------------//
function seedMerchant () {
  console.log(chalk.yellow('Seeding Merchant'))

  let merchantObjs = [
    {name: 'MIT'},
    {name: 'MetLife'},
    {name: 'Delta Air Lines'},
    {name: 'Walmart'},
    {name: 'American Mortgage Co'},
    {name: 'Bestbuy'}
  ]
  let creatingMerchant = merchantObjs.map((merchantObj) => Merchant.create(merchantObj))

  return Promise.all(creatingMerchant)
}

// -------------------------------------------------------------------------------------//
function seedTransaction () {
  console.log(chalk.yellow('seeding Transaction'))

  let transactionObjs = [
    {amount: 100, date: 1475346706, accountId: 1, categoryId: 1, merchantId: 1},
    {amount: 200, date: 1475346706, accountId: 2, categoryId: 2, merchantId: 2},
    {amount: 300, date: 1475346706, accountId: 3, categoryId: 3, merchantId: 3},
    {amount: 400, date: 1475346706, accountId: 4, categoryId: 4, merchantId: 4},
    {amount: 500, date: 1475346706, accountId: 5, categoryId: 5, merchantId: 5},
    {amount: 600, date: 1475346706, accountId: 6, categoryId: 6, merchantId: 6}
  ]
  let creatingTransaction = transactionObjs.map(transactionObj => Transaction.create(transactionObj))

  return Promise.all(creatingTransaction)
}

// -------------------------------------------------------------------------------------//

db.sync({ force: true })
  .then(() => {
    console.log(chalk.green('Forcing Sync on DB Successful'))
    return seedAccount()
  })
  .then(() => {
    console.log(chalk.green('Account Seeding Successful'))
    return seedCategory()
  })
  .then(() => {
    console.log(chalk.green('Category Seeding Successful'))
    return seedMerchant()
  })
  .then(() => {
    console.log(chalk.green('Merchant Seeding Successful'))
    return seedTransaction()
  })
  .then(() => {
    console.log(chalk.blue('finish seeding'))
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
