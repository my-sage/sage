import React from 'react';
import {Link} from 'react-router';
import PieChart from './PieChart';
import VerticalBarGraph from './VerticalBarGraph';
import {wantIncomeFilter, enhanceTransactions} from '../../utils/graphUtils';
import {Dropdown, MenuItem} from 'react-bootstrap';

const SpendingPage = ({transactions, categories, merchants}) => {
	const spendingData = wantIncomeFilter(false)(transactions);
	const enhancedTransactions = enhanceTransactions(spendingData);
	return (
		<div>
			<Dropdown title="TEST">
				<Dropdown.Toggle>
					Group Results By ...
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem>Day</MenuItem>
					<MenuItem>Month</MenuItem>
					<MenuItem>Year</MenuItem>
					<MenuItem>Category</MenuItem>
					<MenuItem>Merchant</MenuItem>
				</Dropdown.Menu>
			</Dropdown>
			<h1>Spending By Day</h1>
			<VerticalBarGraph data={enhancedTransactions} groupBy="fullDate"/>
			<h1>Spending By Merchant</h1>
			<PieChart data={enhancedTransactions} groupBy="merchantName"/>
		</div>
	)
};

export default SpendingPage;