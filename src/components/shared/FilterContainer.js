'use strict'

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import InlineFormFilter from './InlineFormFilter';
import * as TransactionActions from '../../actions/transactionActions';  //input whatever actions you need
import { updateInstanceState, updateStartDate, updateEndDate, queryUrl} from './shareFilterComponentUtils';
import {formatForDropDown} from './formatForDropDown'

class FilterContainer extends Component {
	constructor (props) {
		super(props);
		let query = this.props.query;

		console.log('enforcing filtering action due to redirect from trend',Object.keys(query).length)
		if(Object.keys(query).length!==0){
			this.state ={
				instance: Object.assign({},query),
				errors: {}
			}
			let filterUrl = queryUrl(this)
			this.props.actions.getAllTransactions(filterUrl);
		}else {
			this.state = {
				instance: Object.assign({},{categoryId: "",merchantId: "",startDate: "",endDate: ""}),
				errors: {}
			};
		}
		this.filter = this.filter.bind(this);
		this.getAll = this.getAll.bind(this);
	}

	filter (event) {
		event.preventDefault();
		let filterUrl = queryUrl(this);		
		this.props.actions.getAllTransactions(filterUrl)
	}

	getAll (event) {
		event.preventDefault();
		this.props.actions.getAllTransactions();
	}

	render () {
		return <InlineFormFilter 
							instance={this.state.instance}
							merchants={this.props.merchants}
							categories={this.props.categories}
							onChange={updateInstanceState(this)}
							onChangeStart={updateStartDate(this)}
							onChangeEnd={updateEndDate(this)}
							filter={this.filter}
							getAll={this.getAll}
							errors={this.state.errors}
						/>
	}
};

function mapStateToProps(state, ownProps) {

	return {
		categories: formatForDropDown(state.categories.data),
		merchants: formatForDropDown(state.merchants.data)
	} 
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TransactionActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterContainer)



