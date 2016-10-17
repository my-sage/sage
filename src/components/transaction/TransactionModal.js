'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Modal, Button, SplitButton, ButtonToolbar, MenuItem} from "react-bootstrap";
import TransactionEditForm from "./TransactionEditForm";
import * as TransactionActions from '../../actions/transactionActions';
import { pick, compose, map } from 'ramda';

class TransactionModal extends Component {

	constructor (props) {
		super(props);

		this.state = {
			show: false,
			transaction: Object.assign({}, this.props.transaction),
			errors: {}
		};
		this.updateTransactionState = this.updateTransactionState.bind(this);
		this.updateMerchantCategory = this.updateMerchantCategory.bind(this);
    this.update = this.update.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
	}

	updateTransactionState(event) {
    const coerceToInt = (maybeInt) => isNaN(+maybeInt) ? maybeInt : +maybeInt;
		const field = event.target.name;
		let transaction = this.state.transaction;
		transaction[field] = coerceToInt(event.target.value);
		return this.setState(transaction: transaction);
	}

  update() {
    const id = this.state.transaction.id;
    let transaction = this.state.transaction;
    let overWrite = false; 
    this.props.actions.updateTransaction(id, {transaction,overWrite});
    this.close();
  }

  updateMerchantCategory () {
		let id = this.state.transaction.id; 
		let transaction = this.state.transaction;
		let overWrite = true;
		this.props.actions.updateTransaction(id, {transaction,overWrite});
		this.close();
	} 

  close() {
    this.setState({show: false});
  }

  open() {
    this.setState({show: true});
    console.log('state', this.state)
  }

  render () {

  	return (
	  	<div className="modal-container" style={{height: 40}}>

	  		<Button bsStyle="primary" bsSize="xsmall" onClick={this.open}>
	  			<i className="fa fa-pencil" aria-hidden="true"></i>
	  		</Button>

	  		<Modal show={this.state.show} onHide={this.close} container={this} aria-labelledby="contained-modal-title">
	  			
	  			<Modal.Header closeButton>
	  				<Modal.Title id="Contained-modal-title">Transaction Management</Modal.Title>
	  			</Modal.Header>

	  			<Modal.Body>
	  				<TransactionEditForm
	  					onChange={this.updateTransactionState}
	  					transaction={this.state.transaction}
	  					merchants={this.props.merchants}
	  					categories={this.props.categories}
	  					errors={this.state.errors}
	  				/>
	  			</Modal.Body>

	  			<Modal.Footer>
	  				{/*<Button bsStyle="primary" onClick={this.update}>Save and Close</Button>
	  				<Button bsStyle="primary" onClick={this.updateMerchantCategory}>Update Merchant Category</Button>*/}
				    <SplitButton bsStyle="primary" title="Save Change" onClick={this.update}>
				      <MenuItem eventKey="1" onClick={this.update}>Save and Close</MenuItem>
				      <MenuItem eventKey="2" onClick={this.updateMerchantCategory}>Overwrite Merchant Category</MenuItem>
				    </SplitButton>	  				
	  			</Modal.Footer>

	  		</Modal>
	  	</div>
  	)

  }
};

TransactionModal.propTypes = {
  transaction: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  merchants: PropTypes.array.isRequired
};

// const formatForDropdown = (data) => ({
//   value: data.id,
//   text: data.name
// })

// const mapStateToProps = compose(map(map(formatForDropdown)), pick(['categories', 'merchants']))
function mapStateToProps(state, ownProps) {

	const CategoriesFormattedForDropdown = state.categories.data.map(category => {
		return {
			value: category.id,
			text: category ? category.name : 'UNCATEGORIZED'
		};
	});

	const MerchantsFormattedForDropdown = state.merchants.data.map(merchant => {
		return {
			value: merchant.id,
			text: merchant.name
		};
	});  

  return { 
  	categories: CategoriesFormattedForDropdown,
  	merchants: MerchantsFormattedForDropdown
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TransactionActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionModal)
