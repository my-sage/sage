'use strict'

import React from 'react';
import Bootstrap, {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap'
import { render } from 'react-dom';

const divStyle = {
	marginLeft: "249px"
}

const float = {
	float: 'right'
}

export default React.createClass ({
	render(){
		return (
			<Navbar style={divStyle} fluid inverse fixedTop>
			  <Nav style={float}>
			    <NavItem eventKey={3} href="#"><span className="glyphicon glyphicon-user"></span></NavItem>
			    <NavItem eventKey={1} href="#">Logout</NavItem>
			  </Nav>
			</Navbar>
		)
	}
})
