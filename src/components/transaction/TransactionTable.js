'use strict';

import React, { Component, PropTypes } from 'react';
import TransactionSingle from './TransactionSingle';
import { Table } from "react-bootstrap";
import R from 'ramda';

class TransactionTable extends Component {

	constructor (props) {
		super(props);
		this.state = {
			transactions: this.props.transactions,
			status: {date: false, amount: false}
		}
		this.Sort = this.Sort.bind(this);
		console.log('gettting the state', this.state.transactions)
	}

	Sort (event) {
		//console.log('changing property',event.target.attr('name'));
		let field = event.target.getAttribute('name')
		if(this.state.status[field]===false){
			console.log('field', event.target.getAttribute('name'));
			let transactions = R.sortBy(R.prop(field), this.state.transactions);
			console.log('sorted transactions',transactions);
			
			for(let props in this.state.status) {
				this.state.status[props] = false;
			}
			this.state.status[field] = true;

			return this.setState({transactions: transactions})
		}else{
			let transactions = this.state.transactions.reverse();
			return this.setState({transactions: transactions})
		}
	}

	render () {
		return (
			<Table striped bordered condensed hover responsive>
				<thead>
					<tr style={headerBar}>
						<th style={header} name="date" onClick={this.Sort}>Date</th>
						<th style={header} name="merchantId" onClick={this.Sort}>Merchant</th>
						<th style={header} name="categoryId" onClick={this.Sort}>Category</th>
						<th style={header} name="amount" onClick={this.Sort}>Amount</th>
						<th style={header}>Edit</th>
					</tr>
				</thead>
				<tbody>
				{this.state.transactions.map(transaction=>TransactionSingle(transaction))}
				</tbody>
			</Table>
		)
	}
}

const tableStyle = {
      broder: "1px solid black"
};

const header = {
	textAlign: "center"
}

const headerBar = {
	background: "#34495C",
	color:'white'
}

export default TransactionTable