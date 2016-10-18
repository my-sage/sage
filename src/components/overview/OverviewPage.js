import React, {Component} from 'react';
import axios from 'axios';
import {Panel, Button} from 'react-bootstrap'
import OverviewContent from './OverviewContent'
import Promise from 'bluebird';
import moment from 'moment';

class OverviewPage extends Component {
	constructor(){
		super();
		this.state = {transactions:[], accounts:[], budgets:[]};
	}

	componentWillMount() {
		const beginningOfMonth = moment().startOf('month').valueOf();
		const today = moment().valueOf();
		Promise.all([axios.get(`/api/transactions?startDate=${beginningOfMonth}&endDate=${today}`), axios.get('/api/budgets/current'), axios.get('/api/accounts')])
			.spread((transactions, budgets, accounts)=>{
				this.setState({transactions: transactions.data, budgets: budgets.data, accounts: accounts.data});
			})
	}

	render() {
		return (
			<div>
				<div>
					<h1>Overview</h1>
				</div>
					<OverviewContent transactions={this.state.transactions} accounts={this.state.accounts} budgets={this.state.budgets}/>
			</div>
		)
	}
}

export default OverviewPage;
