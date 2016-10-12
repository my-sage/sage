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
			<VerticalBarGraph data={enhancedTransactions} groupBy="fullDate"/>
		</div>
	)
};

export default IncomePage;
