'use strict'

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import InlineFormFilter from '../shared/InlineFormFilter';
import * as budgetActions from '../../actions/budgetActions';  //input whatever actions you need
import { updateInstanceState, updateStartDate, updateEndDate, queryUrl} from '../shared/shareFilterComponentUtils';
import {formatForDropDown} from '../shared/formatForDropDown'

class BudgetFilterContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			instance: Object.assign({},{categoryId: "",startDate: "",endDate: ""}),
			errors: {}
		};
		this.filter = this.filter.bind(this);
		this.getCurrent = this.getCurrent.bind(this);
	}

	filter (event) {
		event.preventDefault();
		let filterUrl = queryUrl(this);		
		this.props.actions.getAllBudgets(filterUrl)
	}

	getCurrent() {
		event.preventDefault();
		this.props.actions.getCurrentBudgets()
	}

	render () {
		return (
				<InlineFormFilter
					instance={this.state.instance}
					categories={this.props.categories}
					onChange={updateInstanceState(this)}
					onChangeStart={updateStartDate(this)}
					onChangeEnd={updateEndDate(this)}
					filter={this.filter}
					getCurrent={this.getCurrent}
					errors={this.state.errors}
				/>
		)
	}
};

BudgetFilterContainer.propTypes = {
	categories: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownProps) {

	return {
		categories: formatForDropDown(state.categories.data)
	} 
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(budgetActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BudgetFilterContainer)



