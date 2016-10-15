'use strict';

import React, { Component, PropTypes } from 'react';
import TransactionSingle from './TransactionSingle';
import { Table } from "react-bootstrap";
import R from 'ramda';

class TransactionTable extends Component {

	constructor (props) {
		super(props);
		const defaultArrow = <i style={arrowIcon} className="fa fa-sort" aria-hidden="true"></i>;
		this.state = {
			transactions: this.props.transactions,
			status: {
				date: {direction: 'neutral',shape: defaultArrow}, 
				amount: {direction: 'neutral',shape: defaultArrow}},
			current: undefined
		}
		this.Sort = this.Sort.bind(this);
		this.arrow = this.arrow.bind(this);
	}

	arrow (field) {
		let temp = this.state.status[field];
			if(temp.direction ==='neutral'){
				temp.shape = <i style={arrowIcon} className="fa fa-sort" aria-hidden="true"></i>;
			}
			if(temp.direction ===true) {
				temp.shape = <i style={arrowIcon} className="fa fa-sort-asc" aria-hidden="true"></i>;
			}
			if(temp.direction ===false){
				temp.shape = <i style={arrowIcon} className="fa fa-sort-desc" aria-hidden="true"></i>
			}
	}

	Sort (event) {
		let field = event.target.getAttribute('name');

		if(field!==this.state.current){

			if(this.state.current!==undefined) {
				let temp =this.state.status[this.state.current];
				temp.direction = 'neutral'
				this.arrow(this.state.current);
			}
			this.state.current = field;
			let temp = this.state.status[field]
			temp.direction = true;
			this.arrow(field)

			let transactions = R.sortBy(R.prop(field), this.state.transactions);
			
			// for(let props in this.state.status) {
			// 	this.state.status[props] = '';
			// }

			//this.state.arrow = true;
			//this.arrow(field);

			return this.setState({transactions: transactions})
		}else{
			let transactions = this.state.transactions.reverse();
			let temp = this.state.status[field];
			temp.direction = !temp.direction;
			this.arrow(field);
			return this.setState({transactions: transactions})
		}
	}

	render () {
		return (
			<Table striped bordered condensed hover responsive>
				<thead>
					<tr style={headerBar}>
						<th style={header} name="date" onClick={this.Sort}>Date &nbsp; &nbsp;{this.state.status.date.shape}</th>
						<th style={header} name="merchantId" onClick={this.Sort}>Merchant &nbsp; &nbsp;</th>
						<th style={header} name="categoryId" onClick={this.Sort}>Category &nbsp; &nbsp;</th>
						<th style={header} name="amount" onClick={this.Sort}>Amount &nbsp; &nbsp;{this.state.status.amount.shape}</th>
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

const arrowIcon = {
	 float: "right",
	 marginTop: "5px"
}

export default TransactionTable