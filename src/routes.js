import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './components/App'
import Overview from './components/overview/OverviewPage'
import Transactions from './components/transactions/TransactionsPage'
import Budgets from './components/budgets/BudgetsPage'
import Trends from './components/trends/TrendsPage'
import Settings from './components/settings/SettingsPage'
import Spending from './components/trends/SpendingPage'

console.log("OK")

render((

	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Overview}/>
			<Route path='/overview'component={Overview}/>
			<Route path='/budgets' component={Budgets}/>
			<Route path='/transactions' component={Transactions}/>
			<Route path='/trends' component={Trends}/>
			<Route path='/settings' component={Settings}/>
		</Route>
	</Router>

), document.getElementById('app'))