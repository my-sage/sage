'use strict';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TrendsTabs from './TrendsTabs';
import {Panel} from 'react-bootstrap';
import R from 'ramda';
import moment from 'moment';
import {browserHistory} from 'react-router';

class TrendsPage extends Component {
	render() {
		const {transactions, query, merchants, categories} = this.props;
		const eventHandlingFunction = (data, groupingBy) => {
			let date, oldQueryParts, newQueryObj={}, newQuery='?';
			if(query){
				oldQueryParts = query.split('?')[1].split('&').map(part=> part.split('='));
				for(let i=0; i<oldQueryParts.length; i++){
					newQueryObj[oldQueryParts[i][0]] = oldQueryParts[i][1]||'';
				}
			}
			switch(groupingBy){
				case('fullDate'):
					date = moment(data.xName, 'MM DD YYYY');
					newQueryObj.startDate = +R.clone(date).subtract(1, 'd').valueOf();
					newQueryObj.endDate = +date.valueOf();
					break;
				case('month'):
					date = moment(data.xName, 'MM YYYY');
					newQueryObj.startDate = +R.clone(date).subtract(1, 'd').valueOf();
					newQueryObj.endDate = +date.endOf('month').valueOf();
					break;
				case('year'):
					date = moment(data.xName, 'YYYY');
					newQueryObj.startDate = +R.clone(date).subtract(1, 'd').valueOf();
					newQueryObj.endDate = +date.endOf('year').valueOf();
					break;
				case('categoryName'):
					newQueryObj.categoryId = +R.filter((category)=>category.name===data.xName, categories)[0].id;
					break;
				case('merchantName'):
					newQueryObj.merchantId = +R.filter((merchant)=>merchant.name===data.xName, merchants)[0].id;
					break;
				default:
					console.log('Something unexpected may have happened');
					break;
			}
			for(let key in newQueryObj){
				if(newQueryObj[key]!==''&&newQueryObj[key]!=='NaN') newQuery+=`${key}=${+newQueryObj[key]}&`;
			}
			browserHistory.push(`/transactions${newQuery.substring(0, newQuery.length-1)}`);
		};
		return (
			<div>
				<div>
					<h1>Trends</h1>
				</div>
				<Panel>
					<TrendsTabs transactions={transactions} eventHandlingFunction={eventHandlingFunction}/>
				</Panel>
			</div>
		)
	}
}
function mapStateToProps(state, ownProps) {
	return {
		transactions: state.transactions.data,
		query: state.transactions.query,
		merchants: state.merchants.data,
		categories: state.categories.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendsPage);
