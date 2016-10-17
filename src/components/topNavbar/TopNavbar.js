'use strict'

import React from 'react';
import Bootstrap, {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap'
import { render } from 'react-dom';
import {Link} from 'react-router'
import Hamburger from './HamburgerMenu'
import Logo from '../../images/letters.png'

const divStyle = {
	backgroundColor:'white',
	marginBottom: '25px',
	boxShadow: '1px 1px 1px grey',
	zIndex:1201
}

const float = {
	float: 'right',
}

const white = {
	color: 'white'
}

export default React.createClass ({
	render(){
		return (
			<Navbar style={divStyle} fluid fixedTop>
				<Nav>
					<img className="logoname" src={Logo}/>
					<Hamburger slide/>
				</Nav>
			  <Nav style={float}>
			    <NavItem eventKey={1} style={float}><Link style={{color:'#34495C'}} to='/'>Logout</Link></NavItem>
			  </Nav>
			</Navbar>
		)
	}
})
