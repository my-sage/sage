'use strict'

import React from 'react';
import Bootstrap, {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap'
import { render } from 'react-dom';

const divStyle = {
	paddingLeft: '44%',
	zIndex: 2
}

const navItem = {
	padding: '0px'
}


export default React.createClass ({
	render(){
		return (
			<Navbar style={divStyle} fixedBottom inverse fluid>
			  <Nav>
			    <NavItem style={navItem} eventKey={1} href="#"> About Us </NavItem>
			    <NavItem style={navItem} eventKey={2} href="#"> Help </NavItem>
			    <NavItem style={navItem} eventKey={3} href="#"> Contact Us </NavItem>
			  </Nav>
			</Navbar>
		)
	}
})



