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
			status: {date: '', amount: ''},
			arrow: true
		}
		this.Sort = this.Sort.bind(this);
		this.arrow = this.arrow.bind(this);
	}

	arrow (field) {

			if(this.state.arrow) {
				this.state.status[field] = <i className="fa fa-sort-asc" aria-hidden="true"></i>;
			}else{
				this.state.status[field] = <i className="fa fa-sort-desc" aria-hidden="true"></i>
			}
	}

	Sort (event) {
		let field = event.target.getAttribute('name');

		if(this.state.status[field]===''){

			let transactions = R.sortBy(R.prop(field), this.state.transactions);
			
			for(let props in this.state.status) {
				this.state.status[props] = '';
			}

			this.state.arrow = true;
			this.arrow(field);
			console.log('the arrow element', this.arrow)

			return this.setState({transactions: transactions})
		}else{
			let transactions = this.state.transactions.reverse();
			this.state.arrow = !this.state.arrow;
			this.arrow(field);
			return this.setState({transactions: transactions})
		}
	}

	render () {
		return (
			<Table striped bordered condensed hover responsive>
				<thead>
					<tr style={headerBar}>
						<th style={header} name="date" onClick={this.Sort}>Date {this.state.status.date}</th>
						<th style={header} name="merchantId" onClick={this.Sort}>Merchant</th>
						<th style={header} name="categoryId" onClick={this.Sort}>Category</th>
						<th style={header} name="amount" onClick={this.Sort}>Amount {this.state.status.amount}</th>
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