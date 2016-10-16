import React, {Component} from 'react';
import PieChart from './PieChart';
import VerticalBarGraph from './VerticalBarGraph';
import {wantIncomeFilter, enhanceTransactions} from '../../utils/graphUtils';
import GroupingDropdown from './GroupingDropdown';
import ChartSelect from './ChartSelect';
import FilterContainer from '../shared/FilterContainer';

class SpendingPage extends Component {
	constructor() {
		super();
		this.state = {groupBy: 'fullDate', shouldBePie: false, displayName: 'Day'}
	}

	render() {
		const spendingData = wantIncomeFilter(false)(this.props.transactions);
		const enhancedTransactions = enhanceTransactions(spendingData);
		const groupSetter = (eventKey) => this.setState({groupBy: eventKey.groupBy, displayName: eventKey.displayName});
		const chartSelector = (eventKey) => this.setState({shouldBePie: eventKey});
		const shouldBePie = (boolean) => {
			return boolean ?
			<PieChart data={enhancedTransactions} groupBy={this.state.groupBy} eventHandlingFunction={this.props.eventHandlingFunction}/> :
			<VerticalBarGraph data={enhancedTransactions} groupBy={this.state.groupBy} barColor='#c0392b' eventHandlingFunction={this.props.eventHandlingFunction}/>;
		};
		return (
			<div>
				<FilterContainer />
				<GroupingDropdown onSelect={groupSetter.bind(this)}/>
				<ChartSelect onSelect={chartSelector.bind(this)}/>
				<h3>Spending By {this.state.displayName}</h3>
				{shouldBePie(this.state.shouldBePie)}
			</div>
		)
	}
}

export default SpendingPage;