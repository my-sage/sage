import React from 'react';
import {Link} from 'react-router'
import {Tabs, Tab, NavDropdown, MenuItem, Row, Col, NavItem, Nav} from 'react-bootstrap'
import Profile from './ProfilePage'
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
					            <NavItem eventKey="2">Add Bank Account</NavItem>
					          </Nav>
					        </Col>
					        <Col sm={12}>
					          <Tab.Content animation>
					            <Tab.Pane eventKey="first">
					              <Profile accounts={this.props.accounts}/>
					            </Tab.Pane>
					            <Tab.Pane eventKey="2">
					              <AddAccount actions={this.props.actions}/>
					            </Tab.Pane>
					          </Tab.Content>
					        </Col>
					      </Row>
					    </Tab.Container>
			    </div>
		)
	}
})
