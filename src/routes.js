import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './components/App'
import Overview from './components/overview/OverviewPage'
import Transactions from './components/transaction/TransactionPage'
import Budgets from './components/budgets/BudgetsPage'
import Trends from './components/trends/TrendsPage'
import Settings from './components/settings/SettingsPage'
import LandingPage from './components/landingPage/landingPage'

export default (
	<Route>
		<Route path='/' component={LandingPage}/>
		<Route path='/' component={App}>
			<IndexRoute component={Overview}/>
			<Route path='/overview' component={Overview}/>
			<Route path='/budgets' component={Budgets}/>
			<Route path='/transactions' component={Transactions}/>
			<Route path='/trends' component={Trends}/>
			<Route path='/settings' component={Settings}/>
			<Route path='/welcome' component={LandingPage}/>
		</Route>
		</Route>
)



