import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TrendsTabs from './TrendsTabs';
import {Panel} from 'react-bootstrap';
import R from 'ramda';
import moment from 'moment';

class TrendsPage extends Component {
	render() {
		const {transactions, query, merchants, categories} = this.props;
		const eventHandlingFunction = (data, groupingBy) => {
			let merchantId, categoryId, startDate, endDate, date, queryParts;
			// console.log('data:', data.xName);
			// console.log('groupingBy:', groupingBy);
			// groupingBy could be fullDate, month, year, categoryName, merchantName
			switch(groupingBy){
				case('fullDate'):
					date = moment(data.xName, 'MM DD YYYY');
					startDate = R.clone(date).subtract(1, 'd').valueOf();
					endDate = date.valueOf();
					break;
				case('month'):
					date = moment(data.xName, 'MM YYYY');
					startDate = R.clone(date).subtract(1, 'd').valueOf();
					endDate = date.endOf('month').valueOf();
					break;
				case('year'):
					date = moment(data.xName, 'YYYY');
					startDate = R.clone(date).subtract(1, 'd').valueOf();
					endDate = date.endOf('year').valueOf();
					break;
				case('categoryName'):
					categoryId = R.filter((category)=>category.name===data.xName, categories)[0].id;
					break;
				case('merchantName'):
					merchantId = R.filter((merchant)=>merchant.name===data.xName, merchants)[0].id;
					break;
				default:
					console.log('default case');
					break;
			}
			if(query) queryParts = query.split('?')[1].split('&');
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
