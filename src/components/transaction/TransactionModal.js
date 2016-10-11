'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Modal, Button} from "react-bootstrap";
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
    this.update = this.update.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
	}

	updateTransactionState(event) {
		const field = event.target.name;
		let transaction = this.state.transaction;
		transaction[field] = event.target.value;
		return this.setState(transaction: transaction);
	}

  update() {
    const id = this.state.transaction.id, transaction = this.state.transaction;
    console.log(this.props.actions.updateTransaction.toString());
    this.props.actions.updateTransaction(id, transaction);
    this.close();
  }

  close() {
    this.setState({show: false});
  }

  open() {
    this.setState({show: true});
  }

  render () {
  	return (
	  	<div className="modal-container" style={{height: 40}}>

	  		<Button bsStyle="primary" bsSize="large" onClick={this.open}>
	  			Edit Panel
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
	  				<Button onClick={this.update}>Save and Close</Button>
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

const formatForDropdown = (data) => ({
  value: data.id,
  text: data.name
})

// const mapStateToProps = compose(map(map(formatForDropdown)), pick(['categories', 'merchants']))
function mapStateToProps(state, ownProps) {

	const CategoriesFormattedForDropdown = state.categories.data.map(category => {
		return {
			value: category.id,
			text: category.name
		};
	});

	const MerchantsFormattedForDropdown = state.merchants.map(merchant => {
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
