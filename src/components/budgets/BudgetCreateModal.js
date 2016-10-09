'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button } from "react-bootstrap";
import DropdownInput from '../shared/DropdownInput';
import { pick } from 'ramda';

class BudgetCreateModal extends Component {

	constructor (props) {
		super(props);

		this.state = {
			show: false,
			categories: pick(['categories'], this.props)
			errors: {}
		};
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
          + Create Budget
	  		</Button>

	  		<Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
	  			
	  			<Modal.Header closeButton>
	  				<Modal.Title id="Contained-modal-title">Create A Budget</Modal.Title>
	  			</Modal.Header>
          <DropdownInput 
            name='categories'
            label='Categories'
            onChange={ onChange }
            defaultOption='Select Budget Category'
            options={ categories }
          />
          <Modal.Body>
            
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
