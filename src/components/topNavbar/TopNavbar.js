'use strict'

import React from 'react';
import Bootstrap, {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap'
import { render } from 'react-dom';
import {Link} from 'react-router'

const divStyle = {
	marginLeft: "247px"
}

const float = {
	float: 'right'
}

const white = {
	color: 'white'
}

export default React.createClass ({
	render(){
		return (
			<Navbar style={divStyle} fluid inverse fixedTop>
			  <Nav style={float}>
			    <NavItem eventKey={3}><Link to="/settings"  style={white}><span className="glyphicon glyphicon-user"></span></Link></NavItem>
			    <NavItem eventKey={1} href="#">Logout</NavItem>
			  </Nav>
			</Navbar>
		)
	}
})
