'use strict';

import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TransactionActions from '../../actions/transactionActions';
import TransactionSingle from './TransactionSingle';
<<<<<<< HEAD
import { Table ,SplitButton, ButtonToolbar, MenuItem} from "react-bootstrap";
=======
import { Table } from "react-bootstrap";
>>>>>>> 8fc177c38de834edfe66a371e836ea0ef7cbdf5b
import R from 'ramda';

const arrowIcon = {
	 float: "right",
	 marginTop: "5px"
}

class TransactionTable extends Component {

	constructor (props) {
		super(props);
		let defaultArrow = <i style={arrowIcon} className="fa fa-sort" aria-hidden="true"></i>;
		this.state = {
			transactions: this.props.transactions,
			status: Object.assign({},{
				date: {direction: 'neutral',shape: defaultArrow}, 
				amount: {direction: 'neutral',shape: defaultArrow},
				merchant: {direction: 'neutral',shape: defaultArrow},
				category: {direction: 'neutral',shape: defaultArrow}
			}),
			current: undefined
		}
		this.Sort = this.Sort.bind(this);
		this.arrow = this.arrow.bind(this);
		//this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		let defaultArrow = <i style={arrowIcon} className="fa fa-sort" aria-hidden="true"></i>;
		this.setState({
			transactions: nextProps.transactions,
			status: Object.assign({},{
				date: {direction: 'neutral',shape: defaultArrow}, 
				amount: {direction: 'neutral',shape: defaultArrow},
				merchant: {direction: 'neutral',shape: defaultArrow},
				category: {direction: 'neutral',shape: defaultArrow}
			}),
			current: undefined
		});
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
		let transactions;
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

			if(field==='date' || field==='amount'){
				transactions = R.sortBy(R.prop(field), this.state.transactions);
			}else{
				transactions = R.sortBy(R.path([field,'name']),this.state.transactions);
			}
			return this.setState({transactions: transactions})
		}
		else{
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
						<th style={header} name="merchant" onClick={this.Sort}>Merchant &nbsp; &nbsp;{this.state.status.merchant.shape}</th>
						<th style={header} name="category" onClick={this.Sort}>Category &nbsp; &nbsp;{this.state.status.category.shape}</th>
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

<<<<<<< HEAD
=======

//const mapStateToProps = (state) => ({ transactions: state.transactions.data })
//const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(TransactionActions, dispatch)});


>>>>>>> 8fc177c38de834edfe66a371e836ea0ef7cbdf5b
export default TransactionTable;