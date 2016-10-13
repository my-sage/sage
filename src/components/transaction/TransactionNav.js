'use strict';

import React from 'react';
import {Link} from 'react-router';

const TransactionNav = () => (
	<ul>
		<li><Link activeClassName="active" to="/transactions/type">Type</Link></li>
		<li><Link activeClassName="active" to="/transactions/accounts">Accounts</Link></li>
	</ul>
);

export default TransactionNav;