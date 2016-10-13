'use strict'

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import InlineFormFilter from './InlineFormFilter';
import * as TransactionActions from '../../actions/transactionActions';  //input whatever actions you need
import moment from 'moment'

class FilterContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			instance: Object.assign({},{categoryId: "",startDate: "",endDate: ""}),
			errors: {}
		};
		this.updateInstanceState = this.updateInstanceState.bind(this);
		this.updateStartDate = this.updateStartDate.bind(this);
		this.updateEndDate = this.updateEndDate.bind(this);
		this.filter = this.filter.bind(this);
	}

	updateInstanceState(event) {
		const coerceToInt = (maybeInt) => isNaN(+maybeInt) ? maybeInt : +maybeInt;
		console.log('event name',event.target.name)
		const field = event.target.name;
		let instance = this.state.instance;
		instance[field] = event.target.value;
		return this.setState({instance: instance});
	}

	updateStartDate(value) {
		let instance = this.state.instance;
		instance.startDate = value;
		return this.setState({instance: instance})
	}

	updateEndDate(value) {
		let instance = this.state.instance;
		instance.endDate = value;
		return this.setState({endDate: value})
	}

	filter (event) {
		event.preventDefault();
		//some ajax action with filtering parameter in the get command
		let {categoryId, startDate, endDate} = this.state.instance;
		this.props.actions.getAllTransactions
		let strCategory,strStart,strEnd;
		let filterUrl="";
		if(categoryId){
			//strCategory = "categoryId="+categoryId;
			filterUrl +=("?" +"categoryId="+categoryId);
		}
		if(startDate){
			//strStart="&startDate="+moment(startDate).valueOf()
			filterUrl += ("&startDate="+moment(startDate).valueOf())
		}
		if(endDate){
			//strEnd="&endDate="+moment(endDate).valueOf()
			filterUrl += ("&endDate="+moment(endDate).valueOf())
		}
		//let filterUrl = "?"+strCategory+strStart+strEnd;
		console.log('the complete Url',filterUrl)		
		this.props.actions.getAllTransactions(filterUrl)
	}

	render () {
		return <InlineFormFilter 
							instance={this.state.instance}
							categories={this.props.categories}
							onChange={this.updateInstanceState}
							onChangeStart={this.updateStartDate}
							onChangeEnd={this.updateEndDate}
							filter={this.filter}
							errors={this.state.errors}
						/>
	}
};

FilterContainer.propTypes = {
	categories: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownProps) {

	const CategoriesFormattedForDropdown = state.categories.data.map(category => {
		return {
			value: category.id,
			text: category.name
		};
	});

	return {
		categories: CategoriesFormattedForDropdown,
	} 
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TransactionActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterContainer)



