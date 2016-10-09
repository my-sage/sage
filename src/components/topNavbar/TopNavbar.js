'use strict'

import React from 'react';
import Bootstrap, {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap'
import { render } from 'react-dom';

const divStyle = {
	marginLeft: "250px"
}



const TopNavbar = (
	  <Navbar style={divStyle} fluid inverse fixedTop>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="#">React-Bootstrap</a>
	      </Navbar.Brand>
	    </Navbar.Header>
	    <Nav>
	      <NavItem eventKey={1} href="#">Link</NavItem>
	      <NavItem eventKey={2} href="#">Link</NavItem>
	      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
	        <MenuItem eventKey={3.1}>Action</MenuItem>
	        <MenuItem eventKey={3.2}>Another action</MenuItem>
	        <MenuItem eventKey={3.3}>Something else here</MenuItem>
	        <MenuItem divider />
	        <MenuItem eventKey={3.3}>Separated link</MenuItem>
	      </NavDropdown>
	      <NavItem eventKey={3} href="#"><span className="glyphicon glyphicon-user"></span></NavItem>
	    </Nav>
	  </Navbar>
);

render(TopNavbar, document.getElementById('topNavbar'));

export default TopNavbar;