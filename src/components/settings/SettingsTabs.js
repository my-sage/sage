import React from 'react';
import {Link} from 'react-router'
import {Tabs, Tab, NavDropdown, MenuItem, Row, Col, NavItem, Nav} from 'react-bootstrap'
import Profile from './ProfilePage'
import Accounts from './AccountsPage'
import AddAccount from './AddAccountPage'

export default React.createClass({
	render(){
		return (
				<div>
					  <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
					      <Row className="clearfix">
					        <Col sm={12}>
					          <Nav bsStyle="tabs">
					            <NavItem eventKey="first">Profile</NavItem>
					            <NavDropdown eventKey="2" title="Your Accounts" id="nav-dropdown-within-tab">
					              <MenuItem eventKey="2.1">All Accounts</MenuItem>
					              <MenuItem eventKey="2.2">Add Account</MenuItem>
					            </NavDropdown>
					          </Nav>
					        </Col>
					        <Col sm={12}>
					          <Tab.Content animation>
					            <Tab.Pane eventKey="first">
					              <Profile/>
					            </Tab.Pane>
					            <Tab.Pane eventKey="2.1">
					              <Accounts/>
					            </Tab.Pane>
					            <Tab.Pane eventKey="2.2">
					              <AddAccount/>
					            </Tab.Pane>
					          </Tab.Content>
					        </Col>
					      </Row>
					    </Tab.Container>
			    </div>
		)
	}
})