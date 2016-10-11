'use strict'

import React from 'react';
import Bootstrap, {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap'
import { render } from 'react-dom';

const divStyle = {
	marginLeft: "250px"
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


// <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//   <MenuItem eventKey={3.1}>Action</MenuItem>
//   <MenuItem eventKey={3.2}>Another action</MenuItem>
//   <MenuItem eventKey={3.3}>Something else here</MenuItem>
//   <MenuItem divider />
//   <MenuItem eventKey={3.3}>Separated link</MenuItem>
// </NavDropdown>


// <div className="navbar navbar-default navbar-fixed-top inverse" role="navigation">
//       <div className="container">
//         <div className="navbar-header">
//           <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//           </button>
//           <a className="navbar-brand" href="#">Project name</a>
//         </div>
//         <div className="navbar-collapse collapse">
//           <ul className="nav navbar-nav">
//             <li className="active"><a href="#">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
//       </div>
//   </div>