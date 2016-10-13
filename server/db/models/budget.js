'use strict'

const Sequelize = require('sequelize');
const db = require('../_db');
const Category = require('./category');

const fields = {};
const options = {};

fields.name = {
	type: Sequelize.STRING,
	allowNull: false
};

fields.targetAmount = {
	type: Sequelize.DOUBLE,
	allowNull: false,
	defaultValue: 0
};

fields.currentAmount = {
	type: Sequelize.DOUBLE,
	allowNull: false,
	defaultValue: 0
};

fields.type = {
	type: Sequelize.STRING,
	allowNull: false
};

fields.endDate = {
	type: Sequelize.BIGINT
};

let hooks = {};
options.hooks = hooks;

hooks.beforeCreate = function (budget) {
	let currentTime = new Date();
	let endOfMonth = new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 0);
	if (!budget.endDate) budget.endDate = endOfMonth.valueOf();
};

hooks.afterCreate = function (budget) {
	return budget.getTransactions()
		.then(transactions => {
			if (transactions) {
				let totalTransactionAmount = transactions.reduce((pre, transaction) => {
					return pre + transaction.amount
				}, 0);
				budget.currentAmount = budget.currentAmount + totalTransactionAmount;
			}
			return budget.save();
		})
};

const classMethods = {};

classMethods.getCurrentBudgets = function () {
	let currentUnixTime = new Date().valueOf();
	return this.findAll({
		where: {
			endDate: {
				$gt: currentUnixTime
			}
		}
	})
};

options.classMethods = classMethods;

let instanceMethods = {};

instanceMethods.getTransactions = function () {
	let budgetEndTime = this.endDate;
	let budgetEndDate = new Date(+budgetEndTime + 1000 * 3600);
	let budgetStartTime = new Date(budgetEndDate.getFullYear(), budgetEndDate.getMonth() - 1, 0).valueOf();
	return this.getCategory()
		.then(category => {
			return category.getTransactions({
				where: {
					date: {$gte: budgetStartTime, $lte: budgetEndTime}
				}
			})
		})
};

options.instanceMethods = instanceMethods;

options.defaultScope = {
  include: [Category]
};

module.exports = db.define('budget', fields, options);
