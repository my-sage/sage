'use strict'

import React from 'react';
import Bootstrap, {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap'
import { render } from 'react-dom';
import {Link} from 'react-router'
import Hamburger from './HamburgerMenu'

const divStyle = {
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
				<Nav>
					<Hamburger/>
				</Nav>
			  <Nav style={float}>
			    <NavItem eventKey={1} style={float}>Logout</NavItem>
			  </Nav>
			</Navbar>
		)
	}
})
