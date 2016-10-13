import React from 'react';
import {Tabs, Tab, NavDropdown, MenuItem, Row, Col, NavItem, Nav} from 'react-bootstrap'
import TypeTabs from './TypeTabs'
import TransactionTable from './TransactionTable'
import Filter from '../shared/FilterContainer'

const style = {
	pushDown: {
		marginBottom: '40px'
	}
}

export default React.createClass({
	render(){
		return (

				<div>
					  <Tab.Container id="tabs-with-dropdown" defaultActiveKey="1">
					      <Row className="clearfix">
					        <Col sm={12}  style={style.pushDown}>
					          <Nav bsStyle="tabs">
					            <NavDropdown eventKey="1" title="Type">
					            	<MenuItem eventKey="1">All Transactions</MenuItem>
					            	<MenuItem eventKey="1.1">Cash & Credit</MenuItem>
					            	<MenuItem eventKey="1.2">Investment</MenuItem>
					            	<MenuItem eventKey="1.3">Cash Only</MenuItem>
					            	<MenuItem eventKey="1.4">Loan</MenuItem>
					            </NavDropdown>
					            <NavDropdown eventKey="2" title="Accounts">
					            	<MenuItem eventKey="2.1">View All</MenuItem>
					            	<MenuItem eventKey="2.2">Bank of America</MenuItem>
					            	<MenuItem eventKey="2.3">Chase</MenuItem>
					            	<MenuItem eventKey="2.4">TD Bank</MenuItem>
					            	<MenuItem eventKey="2.5">American Express</MenuItem>
					            </NavDropdown>
					          </Nav>
					        </Col>

					        <Filter/>

					        <Col sm={12}>
					          <Tab.Content animation>

					            <Tab.Pane eventKey="1">
					              <h3>All Transactions</h3>
					              <TransactionTable transactions={this.props.transactions}/>
					            </Tab.Pane>
					            <Tab.Pane eventKey="1.1">
					              <h3>Cash & Credit</h3>
					            </Tab.Pane>
					            <Tab.Pane eventKey="1.2">
					              <h3>Investment</h3>
					            </Tab.Pane>
					            <Tab.Pane eventKey="1.3">
					              <h3>Cash Only</h3>
					            </Tab.Pane>
					            <Tab.Pane eventKey="1.4">
					              <h3>Loan</h3>
					            </Tab.Pane>

					            <Tab.Pane eventKey="2.1">
					              <h3>All Accounts</h3>
					            </Tab.Pane>
					            <Tab.Pane eventKey="2.2">
					              <h3>Bank of America</h3>
					            </Tab.Pane>
					            <Tab.Pane eventKey="2.3">
					              <h3>Chase</h3>
					            </Tab.Pane>
					            <Tab.Pane eventKey="2.4">
					              <h3>TD Bank</h3>
					            </Tab.Pane>
					            <Tab.Pane eventKey="2.5">
					              <h3>American Express</h3>
					            </Tab.Pane>

					          </Tab.Content>
					        </Col>
					      </Row>
					    </Tab.Container>
			    </div>
		)
	}
})
