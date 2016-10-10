'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Modal, Button} from "react-bootstrap";
import TransactionEditForm from "./TransactionEditForm";

class TransactionModal extends Component {

	constructor (props) {
		super(props);

		this.state = {
			show: false,
			transaction: Object.assign({}, this.props.transaction),
			errors: {}
		};
		this.updateTransactionState = this.updateTransactionState.bind(this);
	}

	updateTransactionState(event) {
		const field = event.target.name;
		let transaction = this.state.transaction;
		transaction[field] = event.target.value;
		return this.setState(transaction: transaction);
	}

  render () {
  	let close = () => this.setState({show: false});
  	return (
	  	<div className="modal-container" style={{height: 50}}>

	  		<Button bsStyle="primary" bsSize="large" onClick={() => this.setState({show: true})}>
	  			Edit Panel
	  		</Button>

	  		<Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
	  			
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
	  				<Button onClick={close}>Save and Close</Button>
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


function mapStateToProps(state, ownProps) {

	const CategoriesFormattedForDropdown = state.categories.map(category => {
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
    actions: bindActionCreators({}, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionModal)