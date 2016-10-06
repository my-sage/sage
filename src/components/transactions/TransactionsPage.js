import React from 'react';
import {Link} from 'react-router'
import NavLink from './../TopHNavBar'

export default (props) => (
  <div>
    <h1>Transactions</h1>
    <ul>
      <li><Link activeClassName="active" to="/transactions/type">Type</Link></li>
      <li><Link activeClassName="active" to="/transactions/accounts">Accounts</Link></li>
      <li><Link activeClassName="active" to="/transactions/tags">Tags</Link></li>
    </ul>
    {props.children}
  </div>
)

