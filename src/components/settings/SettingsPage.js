import React from 'react';
import {Link} from 'react-router'

export default React.createClass({
	render(){
		return (
			<div>
			<h1>Settings</h1>
				<ul>
					<li><Link activeClassName="active" to="/settings/profile">Profile</Link></li>
					<li><Link activeClassName="active" to="/settings/youraccounts">Your Accounts</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
})