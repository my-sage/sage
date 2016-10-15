import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TrendsTabs from './TrendsTabs'
import {Panel} from 'react-bootstrap'

class TrendsPage extends Component {
	render() {
  const {transactions, merchants, categories, dispatch} = this.props;
		return (
			<div>
				<div>
					<h1>Trends</h1>
				</div>
				<Panel>
				<TrendsTabs transactions={transactions} merchants={merchants} categories={categories} dispatch={dispatch}/>
				</Panel>
			</div>
		)
	}
}
function mapStateToProps(state, ownProps) {
	return {transactions: state.transactions.data}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendsPage);
