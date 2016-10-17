'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button } from "react-bootstrap";
import DropdownInput from '../shared/DropdownInput';
import * as BudgetActions from '../../actions/budgetActions';
import BudgetEditForm from './BudgetEditForm';
import { pick } from 'ramda';

const button = {
	marginRight:'100px'
}

class BudgetUpdateModal extends Component {

	constructor (props) {
		super(props);

		this.state = {
			show: false,
			budget: Object.assign({},this.props.budget),
			errors: {}
		};

		this.updateBudgetState = this.updateBudgetState.bind(this);
    this.update = this.update.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
	}

	updateBudgetState(event) {
		const coerceToInt = (maybeInt) => isNaN(+maybeInt) ? maybeInt : +maybeInt;
		const field = event.target.name;
		let budget = this.state.budget;
		budget[field] = event.target.value;
		return this.setState({budget: budget});
	}

  update() {
    const newbudget = this.state.budget;
    this.props.actions.updateBudget(this.state.budget.id,newbudget);
    this.close();
  }	

  close () {
  	this.setState({show: false});
  }

  open () {
  	this.setState({show: true});
  }

  render () {
  	let close = () => this.setState({show: false});
  	return (
	  	<div className="modal-container" style={{height: 35, display: "inline-block", float:'right', marginLeft: '25px', marginRight: '10px'}}>

	  		<Button bsStyle="primary" bsSize="small" onClick={this.open}>
           	Edit Budget
	  		</Button>

	  		<Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
	  			
	  			<Modal.Header closeButton>
	  				<Modal.Title id="Contained-modal-title">Edit Budget</Modal.Title>
	  			</Modal.Header>

          <Modal.Body>

 	  				<BudgetEditForm
	  					onChange={this.updateBudgetState}
	  					budget={this.state.budget}
	  					categories={this.props.categories}
	  					typeBudgets={this.props.typeBudgets}
	  					errors={this.state.errors}
	  				/>

          </Modal.Body>

	  			<Modal.Footer>
	  				<Button bsStyle='success' onClick={this.update}>Save and Close</Button>
	  			</Modal.Footer>

	  		</Modal>
	  	</div>
  	)

  }
};

BudgetUpdateModal.propTypes = {
  categories: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
 
	const CategoriesFormattedForDropdown = state.categories.data.map(category => {
		return {
			value: category.id,
			text: category ? category.name : 'UNCATEGORIZED'
		};
	});

	const typeBudgets = [
		{value: "Spending", text: "Spending"},
		{value: "Income", text: "Income"}
	]

	return {
		categories: CategoriesFormattedForDropdown,
		typeBudgets: typeBudgets
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BudgetActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BudgetUpdateModal)
