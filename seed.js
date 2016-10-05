const chalk = require('chalk');
const db = require('./server/db');
const Promise = require('sequelize').Promise;
const _ = require('lodash');
const curry = _.curry;
const Account = db.model('account');
const Category = db.model('category');
const Transaction = db.model('transaction');
const Budget = db.model('budget');
const Merchant = db.model('merchant');
const Tag = db.model('tag');

const numAccounts = 6;
const numMerchants = 6;
const numCategories = 6;




// --------------------------------Account Seed--------------------------------------------//
function seedAccount() {
  console.log(chalk.yellow('seeding account.'));

  const accountObjs = [{
    name: 'Visa',
    type: 'Debit'
  }, {
    name: 'American Express',
    type: 'Credit'
  }, {
    name: 'Chase',
    type: 'Credit'
  }, {
    name: 'PNC',
    type: 'Debit'
  }, {
    name: 'Bank of America',
    type: 'Credit'
  }, {
    name: 'Citigroup',
    type: 'Credit'
  }];
  const creatingAccounts = accountObjs.map(accountObj => Account.create(accountObj))

  return Promise.all(creatingAccounts)
}

// ---------------------------------Category Seed----------------------------------------------//
function seedCategory() {
  console.log(chalk.yellow('Seeding Category'));

  const categoryObjs = [{
    name: 'Education'
  }, {
    name: 'Insurance'
  }, {
    name: 'Auto & Transport'
  }, {
    name: 'Food & Dining'
  }, {
    name: 'Housing'
  }, {
    name: 'Entertainment'
  }];

  const creatingCategory = categoryObjs.map(categoryObj => Category.create(categoryObj));

  return Promise.all(creatingCategory)
}

// -----------------------------------Merchant Seed-----------------------------------------------//
function seedMerchant() {
  console.log(chalk.yellow('Seeding Merchant'));

  const merchantObjs = [{
    name: 'MIT',
    categoryId: 1
  }, {
    name: 'MetLife',
    categoryId: 2
  }, {
    name: 'Delta Air Lines',
    categoryId: 3
  }, {
    name: 'Walmart',
    categoryId: 4
  }, {
    name: 'American Mortgage Co',
    categoryId: 5
  }, {
    name: 'Bestbuy',
    categoryId: 6
  }];
  const creatingMerchant = merchantObjs.map((merchantObj) => Merchant.create(merchantObj));

  return Promise.all(creatingMerchant)
}

// ------------------------------------Budget Seed-------------------------------------------------//
function seedBudget() {
  console.log(chalk.yellow('Seeding Budget'));

  const budgetObjs = [{
    name: 'College Loan',
    type: 'spending',
    categoryId: 1
  }, {
    name: 'College textbook spending',
    type: 'spending',
    categoryId: 1
  }, {
    name: 'College Party',
    type: 'spending',
    categoryId: 1
  }, {
    name: 'Gas & Fuel',
    type: 'spending',
    categoryId: 3
  }, {
    name: 'Restaurants',
    type: 'spending',
    categoryId: 4
  }, {
    name: 'Groceries',
    type: 'spending',
    categoryId: 4
  }];

  const creatingBudget = budgetObjs.map(budgetObj => Budget.create(budgetObj));

  return Promise.all(creatingBudget);
}

// ----------------------------------Transaction Seed-----------------------------------------------//

let randomNote = [
	'general spending',
	'short term loan',
	'long term loan',
	'family spending',
	'basic spending',
	'Miscellaneous expense'
];

let randomDateGen = (monthsAway) => {
  let currentDate = new Date(),
    randomNum = _.random(-monthsAway, monthsAway);
  return new Date(currentDate.getFullYear(), currentDate.getMonth() + randomNum, _.random(1, 27)).valueOf();
}

let randomAmount = () => _.round(_.random(10, 1500, true), 2);

let randomTransaction = () => {
  return {
    amount: randomAmount(),
    date: randomDateGen(2),
    note: _.sample(randomNote),
    accountId: _.random(1, numAccounts),
    categoryId: _.random(1, numCategories),
    merchantId: _.random(1, numMerchants)
  }
}

let randomTransactions = (num) => {
  let transactions = [];
  let range = new Array(num).fill(0);
  return range.map(randomTransaction)
}

function seedTransaction() {
  console.log(chalk.yellow('seeding Transaction'));
  const transactionObjs = randomTransactions(100);
  const creatingTransaction = transactionObjs.map(transactionObj => Transaction.create(transactionObj));
  return Promise.all(creatingTransaction)
}

// ----------------------------------Datebase Sync-------------------------------------------------//

db.sync({
    force: true
  })
  .then(() => {
    console.log(chalk.green('Forcing Sync on DB Successful'));
    return seedAccount();
  })
  .then(() => {
    console.log(chalk.green('Account Seeding Successful'));
    return seedCategory();
  })
  .then(() => {
    console.log(chalk.green('Category Seeding Successful'));
    return seedMerchant();
  })
  .then(() => {
    console.log(chalk.green('Merchant Seeding Successful'));
    return seedTransaction();
  })
  .then(() => {
    console.log(chalk.green('Transaction Seeding Successful'));
    return seedBudget();
  })
  .then(() => {
    console.log(chalk.blue('finish seeding'));
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1)
  });
