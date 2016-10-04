const chalk = require('chalk');
const db = require('./server/db');
const Promise = require('sequelize').Promise;

const Account = db.model('account');
const Category = db.model('category');
const Transaction = db.model('transaction');
const Budget = db.model('budget');
const Merchant = db.model('merchant');
const Tag = db.model('tag');

// --------------------------------Account Seed--------------------------------------------//
function seedAccount() {
	console.log(chalk.yellow('seeding account.'));

	const accountObjs = [
		{name: 'Visa', type: 'Debit'},
		{name: 'American Express', type: 'Credit'},
		{name: 'Chase', type: 'Credit'},
		{name: 'PNC', type: 'Debit'},
		{name: 'Bank of America', type: 'Credit'},
		{name: 'Citigroup', type: 'Credit'}
	];
	const creatingAccounts = accountObjs.map(accountObj => Account.create(accountObj))

	return Promise.all(creatingAccounts)
}

// ---------------------------------Category Seed----------------------------------------------//
function seedCategory() {
	console.log(chalk.yellow('Seeding Category'));

	const categoryObjs = [
		{name: 'Education'},
		{name: 'Insurance'},
		{name: 'Auto & Transport'},
		{name: 'Food & Dining'},
		{name: 'Housing'},
		{name: 'Entertainment'}
	];

	const creatingCategory = categoryObjs.map(categoryObj => Category.create(categoryObj));

	return Promise.all(creatingCategory)
}

// -----------------------------------Merchant Seed-----------------------------------------------//
function seedMerchant() {
	console.log(chalk.yellow('Seeding Merchant'));

	const merchantObjs = [
		{name: 'MIT', categoryId: 1},
		{name: 'MetLife', categoryId: 2},
		{name: 'Delta Air Lines', categoryId: 3},
		{name: 'Walmart', categoryId: 4},
		{name: 'American Mortgage Co', categoryId: 5},
		{name: 'Bestbuy', categoryId: 6}
	];
	const creatingMerchant = merchantObjs.map((merchantObj) => Merchant.create(merchantObj));

	return Promise.all(creatingMerchant)
}

// ------------------------------------Budget Seed-------------------------------------------------//
function seedBudget() {
	console.log(chalk.yellow('Seeding Budget'));

	const budgetObjs = [
		{name: 'College Loan', type: 'spending', categoryId: 1},
		{name: 'College textbook spending', type: 'spending', categoryId: 1},
		{name: 'College Party', type: 'spending', categoryId: 1},
		{name: 'Gas & Fuel', type: 'spending', categoryId: 3},
		{name: 'Restaurants', type: 'spending', categoryId: 4},
		{name: 'Groceries', type: 'spending', categoryId: 4}
	];
	
	const creatingBudget = budgetObjs.map(budgetObj => Budget.create(budgetObj));

	return Promise.all(creatingBudget);
}

// ----------------------------------Transaction Seed-----------------------------------------------//
function seedTransaction() {
	console.log(chalk.yellow('seeding Transaction'));

	const transactionObjs = [
		{amount: 100, date: 1475346706, accountId: 1, categoryId: 1, merchantId: 1},
		{amount: 200, date: 1475346706, accountId: 2, categoryId: 2, merchantId: 2},
		{amount: 300, date: 1475346706, accountId: 3, categoryId: 3, merchantId: 3},
		{amount: 400, date: 1475346706, accountId: 4, categoryId: 4, merchantId: 4},
		{amount: 500, date: 1475346706, accountId: 5, categoryId: 5, merchantId: 5},
		{amount: 600, date: 1475346706, accountId: 6, categoryId: 6, merchantId: 6}
	];
	const creatingTransaction = transactionObjs.map(transactionObj => Transaction.create(transactionObj));

	return Promise.all(creatingTransaction)
}

// ----------------------------------Datebase Sync-------------------------------------------------//

db.sync({force: true})
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