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
			{/*<PieChart data={enhancedTransactions} groupBy="month"/>*/}
			<VerticalBarGraph data={enhancedTransactions} groupBy="fullDate"/>
		</div>
	)
};

export default SpendingPage;