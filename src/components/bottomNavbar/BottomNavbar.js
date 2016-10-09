'use strict'

import React from 'react';
import Bootstrap, {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap'
import { render } from 'react-dom';

const divStyle = {
	marginLeft: "250px",
	textAlign: 'center'
}

const BottomNavbar = (
	  <Navbar style={divStyle} fixedBottom inverse fluid>
	    <Nav>
	      <NavItem eventKey={1} href="#"> About Us </NavItem>
	      <NavItem eventKey={2} href="#"> Help </NavItem>
	      <NavItem eventKey={3} href="#"> Contact Us </NavItem>
	    </Nav>
	  </Navbar>
);

render(BottomNavbar, document.getElementById('bottomNavbar'));

export default BottomNavbar;