import React from 'react';
import {Link} from 'react-router'
import {Tabs, Tab} from 'react-bootstrap'
import Spending from './SpendingPage'

export default React.createClass({
	render(){
		return (

				  <Tabs defaultActiveKey={1}>
				    <Tab eventKey={1} title="Spending">
				    	<Spending/>
				    </Tab>
				    <Tab eventKey={2} title="Income">
				    </Tab>
				    <Tab eventKey={3} title="Net Income">
				    </Tab>
				    <Tab eventKey={4} title="Assets">
				    </Tab>
				    <Tab eventKey={5} title="Debts">
				    </Tab>
				    <Tab eventKey={6} title="Net Worth">
				    </Tab>
				  </Tabs>
		)
	}
})