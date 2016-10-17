import React from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import SpendingPage from './SpendingPage';
import IncomePage from './IncomePage';
import NetIncomePage from './NetIncomePage';

const TrendsTabs = ({transactions, eventHandlingFunction}) => {
	return (
		<Tabs defaultActiveKey={1}>
			<Tab eventKey={1} title="Spending">
				<SpendingPage transactions={transactions} eventHandlingFunction={eventHandlingFunction}/>
			</Tab>
			<Tab eventKey={2} title="Income">
				<IncomePage transactions={transactions} eventHandlingFunction={eventHandlingFunction}/>
			</Tab>
			<Tab eventKey={3} title="Net Income">
				<NetIncomePage transactions={transactions} eventHandlingFunction={eventHandlingFunction}/>
			</Tab>
		</Tabs>
	)
};

export default TrendsTabs;
