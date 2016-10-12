import React from 'react';
import {Link} from 'react-router';
import PieChart from './PieChart';
import VerticalBarGraph from './VerticalBarGraph';
import {wantIncomeFilter, enhanceTransactions} from '../../utils/graphUtils';

const SpendingPage = ({transactions, categories, merchants}) => {
	const spendingData = wantIncomeFilter(false)(transactions);
	const enhancedTransactions = enhanceTransactions(spendingData);
	return (
		<div>
			<h1>Spending By Day</h1>
			<VerticalBarGraph data={enhancedTransactions} groupBy="fullDate"/>
			<h1>Spending By Merchant</h1>
			<PieChart data={enhancedTransactions} groupBy="merchantName" />
		</div>
	)
};

export default SpendingPage;