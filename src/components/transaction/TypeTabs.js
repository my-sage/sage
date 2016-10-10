import React from 'react';
import {Tabs, Tab, Nav, NavItem} from 'react-bootstrap'

export default React.createClass({
	render(){
		return (
			<Tabs bsStyle="pills" justified activeKey={1}>
			  <Tab eventKey={1} title="Cash & Credit">
			  	<h3>Cash & Credit</h3>
			  </Tab>
			  <Tab eventKey={2} title="Investment">NavItem 1 wcontent</Tab>
			  <Tab eventKey={3} title="Cash Only">NavItem 1s content</Tab>
			  <Tab eventKey={4} title="Loan">NavItem 1s content</Tab>
			</Tabs>
		)
	}
})