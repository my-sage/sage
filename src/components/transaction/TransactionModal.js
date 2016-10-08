'use strict';

import React, { Component } from 'react';
import {Modal, Button} from "react-bootstrap"

class TransactionModal extends Component {

	constructor (props) {
		super(props);
		this.state = {show: false};
	}

  render () {
  	let close = () => this.setState({show: false});
  	console.log('trying to get the props',this.props)
  	return (
	  	<div className="modal-container" style={{height: 200}}>

	  		<Button bsStyle="primary" bsSize="large" onClick={() => this.setState({show: true})}>
	  			Edit Panel
	  		</Button>

	  		<Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
	  			
	  			<Modal.Header closeButton>
	  				<Modal.Title id="Contained-modal-title">Transaction Detail</Modal.Title>
	  			</Modal.Header>

	  			<Modal.Body>
	  				this is the main Modal Content
	  				<p>{this.props.merchant}</p>
	  				<p>{this.props.category}</p>
	  				<p>{this.props.date}</p>
	  				<p>{this.props.amount}</p>
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