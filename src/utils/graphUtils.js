'use strict';

import R from 'ramda';
import _ from 'lodash';
import moment from 'moment';

const dateAssign = (transaction) => {
	const transactionMoment = moment(+transaction.date);
	transaction.fullDate = transactionMoment.format('MM DD YYYY');
	transaction.month = transactionMoment.format('MM YYYY');
	transaction.year = transactionMoment.format('YYYY');
	return transaction;
};

const orderByDay = (transactions) => R.sortBy(R.prop('date'), transactions);
const mapDates = (transactions) => R.map(dateAssign, transactions);
const groupByProp = (prop) => R.groupBy(transaction => transaction[prop]);
const reduceToSum = (sum, transaction) => _.round(sum + transaction.amount, 2);
const mapReduceToSum = R.mapObjIndexed(R.reduce(reduceToSum, 0));
const formattingFunction = (value, key) => {
	return {x: key, y: value, label: `${key}: $${value}`}
};
const formatData = (transactionData) => {
	const result = [];
	_.forEach(transactionData, (key, value) => result.push(formattingFunction(key, value)));
	return result;
};

export const composeData = (prop) => R.compose(formatData, mapReduceToSum, groupByProp(prop), mapDates, orderByDay, R.clone);

const wantIncome = (boolean) => {
	return boolean ?
		function (transaction) {
			return transaction.category && transaction.category.name.toLowerCase() === 'income'
		}
		:
		function (transaction) {
			return transaction.category && transaction.category.name.toLowerCase() !== 'income'
		}
};

const resolveMerchantAndCategory = (transaction) => {
	transaction.merchantName = transaction.merchant.name;
	transaction.categoryName = transaction.category ? transaction.category.name : 'UNCATEGORIZED';
	return transaction;
};

export const wantIncomeFilter = (boolean) => R.filter(wantIncome(boolean));
export const enhanceTransactions = (transactions) => R.map(resolveMerchantAndCategory, transactions);

export const objectAddition = (objA, objB) => R.mergeWith(R.add, objA, objB);

const makeAbsolute = (transaction) => {
	return {x: transaction.x, y: Math.abs(transaction.y), label: transaction.label};
};

export const mapAbsolute = (transactionData) => {
	const result = [];
	_.forEach(transactionData, (transaction) => result.push(makeAbsolute(transaction)));
	return result;
};
