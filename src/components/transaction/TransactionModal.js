'use strict';

import React, { Component } from 'react';
import {Modal, Button} from "react-bootstrap";
import TransactionEditForm from "./TransactionEditForm";

class TransactionModal extends Component {

	constructor (props) {
		super(props);

		this.state = {
			show: false,
			transaction: Object.assign({}, this.props),
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
  	console.log('trying to get the props',this.props)
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

export default TransactionModal