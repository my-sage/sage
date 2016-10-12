import React from 'react';
import {Link} from 'react-router'
import {Tabs, Tab} from 'react-bootstrap'
import SpendingPage from './SpendingPage';
import IncomePage from './IncomePage';
import NetIncomePage from './NetIncomePage';
import AssetsPage from './AssetsPage';
import DebtsPage from './DebtsPage';
import NetWorthPage from './NetWorthPage';

const TrendsTabs = ({transactions, categories, merchants}) => {
	return (
		<Tabs defaultActiveKey={1}>
			<Tab eventKey={1} title="Spending">
				<SpendingPage transactions={transactions} categories={categories} merchants={merchants}/>
			</Tab>
			<Tab eventKey={2} title="Income">
				<IncomePage transactions={transactions} categories={categories} merchants={merchants}/>
			</Tab>
			<Tab eventKey={3} title="Net Income">
				<NetIncomePage transactions={transactions} categories={categories} merchants={merchants}/>
			</Tab>
			<Tab eventKey={4} title="Assets">
				<AssetsPage transactions={transactions} categories={categories} merchants={merchants}/>
			</Tab>
			<Tab eventKey={5} title="Debts">
				<DebtsPage transactions={transactions} categories={categories} merchants={merchants}/>
			</Tab>
			<Tab eventKey={6} title="Net Worth">
				<NetWorthPage transactions={transactions} categories={categories} merchants={merchants}/>
			</Tab>
		</Tabs>
	)
};

export default TrendsTabs;
