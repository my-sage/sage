'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import InlineFormFilter from './InlineFormFilter';
import * as TransactionActions from '../../actions/transactionActions';  //input whatever actions you need
import { updateInstanceState, updateStartDate, updateEndDate, queryUrl} from './shareFilterComponentUtils';
import {formatForDropDown} from './formatForDropDown'

//import NProgress from 'nprogress';

class FilterContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			instance: Object.assign({},{categoryId: "",merchantId: "",startDate: "",endDate: ""}),
			errors: {}
		};
		this.filter = this.filter.bind(this);
		this.getAll = this.getAll.bind(this);
	}

	filter (event) {
		event.preventDefault();
		let filterUrl = queryUrl(this);		
		this.props.actions.getAllTransactions(filterUrl);
		console.log('start the progress',NProgress);
		//NProgress.set(0.8);
	}

	getAll (event) {
		event.preventDefault();
		this.props.actions.getAllTransactions();
		//NProgress.set(0.8);
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
}

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