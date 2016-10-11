import React, {Component} from 'react';
import {Link} from 'react-router'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TrendsTabs from './TrendsTabs'
import VerticalBarGraph from './VerticalBarGraph';
import PieChart from './PieChart';

class TrendsPage extends Component {
	render() {
		return (
			<div>
				<div>
					<h1>Trends</h1>
				</div>
				<TrendsTabs/>
				{/*SPENDING // INCOME OVER TIME*/}
				<VerticalBarGraph data={this.props.transactions} groupBy="fullDate"/>
				<VerticalBarGraph data={this.props.transactions} groupBy="month" />
				<VerticalBarGraph data={this.props.transactions} groupBy="year"/>
				<PieChart data={this.props.transactions} groupBy="month"/>
				{/*SPENDING BY MERCHANT*/}
				{/*<HorizontalBarGraph data={this.props.transactions} groupBy="merchant"/>*/}
				{/*SPENDING BY CATEGORY*/}
				{/*<HorizontalBarGraph data={this.props.transactions} groupBy="category"/>*/}
			</div>
		)
	}
}
function mapStateToProps(state, ownProps) {
	return {transactions: state.transactions.data, merchants: state.merchants.data, categories: state.categories.data}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendsPage);