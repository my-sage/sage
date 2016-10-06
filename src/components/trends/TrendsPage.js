import React from 'react';
import {Link} from 'react-router'
import NavLink from './../TopHNavBar'

export default React.createClass({
	render(){
		return (
			<div>
			<h1>Trends</h1>
				<ul>
					<li><Link activeClassName="active" to="/trends">Spending</Link></li>
					<li><Link activeClassName="active" to="/trends">Income</Link></li>
					<li><Link activeClassName="active" to="/trends">Net Income</Link></li>
					<li><Link activeClassName="active" to="/trends">Assets</Link></li>
					<li><Link activeClassName="active" to="/trends">Debts</Link></li>
					<li><Link activeClassName="active" to="/trends">Net Worth</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
})