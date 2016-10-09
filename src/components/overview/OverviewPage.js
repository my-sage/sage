import React from 'react';
import {Link} from 'react-router'

export default ({ children }) => (
			<div>
			<h1>Overview</h1>
				<ul>
					<li><Link activeClassName="active" to="/transactions">Cash</Link></li>
					<li><Link activeClassName="active" to="/overview/creditcards">Credit Cards</Link></li>
					<li><Link activeClassName="active" to="/overview/tags">Loans</Link></li>
				</ul>
				{children}
			</div>
		)
