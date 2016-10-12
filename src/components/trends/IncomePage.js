import React from 'react';
import {Link} from 'react-router'
import {wantIncomeFilter, enhanceTransactions} from '../../utils/graphUtils';
import PieChart from './PieChart';
import VerticalBarGraph from './VerticalBarGraph';

const IncomePage = ({transactions, categories, merchants}) => {
	const incomeData = wantIncomeFilter(true)(transactions);
	const enhancedTransactions = enhanceTransactions(incomeData);
	return (
		<div>
			<h1>Income by Day</h1>
			<VerticalBarGraph data={enhancedTransactions} groupBy="fullDate"/>
			<h1>Income By Source</h1>
			<PieChart data={enhancedTransactions} groupBy="merchantName" />
		</div>
	)
};

export default IncomePage;
