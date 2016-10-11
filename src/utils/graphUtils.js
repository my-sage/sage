'use strict';

import R from 'ramda';
import _ from 'lodash';
import moment from 'moment';

const dateAssign = (transaction) => {
	const transactionMoment = moment(transaction.date);
	transaction.fullDate = transactionMoment.format('MM DD YYYY');
	transaction.month = transactionMoment.format('MM YYYY');
	transaction.year = transactionMoment.format('YYYY');
	return transaction;
};
const mapDates = (transactions) => R.map(dateAssign, transactions);
const groupByProp = (prop) => R.groupBy(transaction => transaction[prop]);
const reduceToSum = (sum, transaction) => _.round(sum+transaction.amount,2);
const mapOverData = R.mapObjIndexed(R.reduce(reduceToSum, 0));
const formattingFunction = (value, key) => {
	return {x: key, y: Math.abs(value)}
};
const formatData = (transactionData) => {
	const result = [];
	_.forEach(transactionData, (key, value) => result.push(formattingFunction(key, value)));
	return result;
};

const composeData = (prop) => R.compose(formatData, mapOverData, groupByProp(prop), mapDates, R.clone);

export default composeData;