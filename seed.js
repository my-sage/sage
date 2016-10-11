'use strict'
const chalk = require('chalk');
const db = require('./server/db');
const Promise = require('sequelize').Promise;
const _ = require('lodash');
const R = require('Ramda');
const curry = R.curry;
const Account = db.model('account');
const Category = db.model('category');
const Transaction = db.model('transaction');
const Budget = db.model('budget');
const Merchant = db.model('merchant');
const Tag = db.model('tag');
const bluebird = require('bluebird');

const numAccounts = 6;
const numMerchants = 6;
const numCategories = 6;
const CreditAccountId = [2,6];
const NonCreditAccountId = [1,3,4,5];
const numberOfTransaction = 50;

// --------------------------------Account Seed--------------------------------------------//
function seedAccount() {
  console.log(chalk.yellow('seeding account.'));

  const accountObjs = [{
    name: 'HSBC Simple',
    type: 'Checking'
  }, {
    name: 'American Express Centurion Card',
    type: 'Credit'
  }, {
    name: 'Chase',
    type: 'Checking'
  }, {
    name: 'PNC',
    type: 'Debit'
  }, {
    name: 'Bank of America',
    type: 'Savings'
  }, {
    name: 'Chase Visa',
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

let randomType = [
	'general spending',
	'short term loan',
	'long term loan',
	'family spending',
	'basic spending',
	'Miscellaneous expense'
];

let randomDateGen = (monthsAway) =>
  () => {
    let currentDate = new Date(),
      randomNum = _.random(-monthsAway, monthsAway);
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + randomNum, _.random(1, 27)).valueOf();
  }

let randomDate2MonthsAway = randomDateGen(2);

let randomAmount = () => _.round(_.random(-1000, 2500, true), 2);
let randomAmountSpending = () => _.round(_.random(-100,-10, true),2) 
let randomAmountSaving = () => _.round(_.random(100,300, true),2)

let randomTransaction = (accountId,status) => {
	let amount;
	if(status==="spending") amount = randomAmountSpending();  //it is negative amount for spending
	if(status==="saving") amount = randomAmountSaving();
	
	return {
		amount: amount,
		date: randomDate2MonthsAway(),
		type: _.sample(randomType),
		accountId: accountId,
		categoryId: _.random(1, numCategories),
		merchantId: _.random(1, numMerchants)
	}
}

let randomTransactions = (numOfTransaction,savingDays,accountIdArray) => {
	return accountIdArray.map(accountId => {

		let range = new Array(numOfTransaction).fill(0);
		let transactions = [];

		for(let i=1;i<=numOfTransaction;i++) transactions.push(i);
		let randomSavingDay = _.sampleSize(transactions, savingDays);

		return transactions.map(day => {
			if(randomSavingDay.indexOf(day)!==-1) return randomTransaction(accountId,'saving');
			else return randomTransaction(accountId,'spending');
		})
	})
}

function promiseNester(promisifiedFunc, argsArray) {
  if (argsArray.length === 1) 
  	return promisifiedFunc(argsArray[0]).then(function(resolvedContent) {console.log(resolvedContent)});
  return promisifiedFunc(argsArray[0])
    .then(function(resolvedContent) {
      return promiseNester(promisifiedFunc, argsArray.slice(1))
    });
}


function seedTransaction() {
  console.log(chalk.yellow('seeding Transaction'));
  let creatingTransactionCredit = randomTransactions(30,1,CreditAccountId);
  let creatingTransactionNonCredit = randomTransactions(10,5,NonCreditAccountId);
  let transactionObjs = creatingTransactionCredit.concat(creatingTransactionNonCredit);

  transactionObjs = _.flatten(transactionObjs)
  return promiseNester(Transaction.create.bind(Transaction),transactionObjs)
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
