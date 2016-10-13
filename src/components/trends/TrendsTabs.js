import React from 'react';
import {Link} from 'react-router'
import {Tabs, Tab} from 'react-bootstrap'
import SpendingPage from './SpendingPage';
import IncomePage from './IncomePage';
import NetIncomePage from './NetIncomePage';

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
		</Tabs>
	)
};

export default TrendsTabs;
