import React, {Component} from 'react';
import {wantIncomeFilter, enhanceTransactions} from '../../utils/graphUtils';
import PieChart from './PieChart';
import VerticalBarGraph from './VerticalBarGraph';
import GroupingDropdown from './GroupingDropdown';
import ChartSelect from './ChartSelect';

class IncomePage extends Component {
	constructor() {
		super();
		this.state = {groupBy: 'fullDate', shouldBePie: false}
	}

	render() {
		const spendingData = wantIncomeFilter(true)(this.props.transactions);
		const enhancedTransactions = enhanceTransactions(spendingData);
		const groupSetter = (eventKey) => this.setState({groupBy: eventKey});
		const chartSelector = (eventKey) => this.setState({shouldBePie: eventKey});
		const shouldBePie = (boolean) => boolean ? <PieChart data={enhancedTransactions} groupBy={this.state.groupBy}/> : <VerticalBarGraph data={enhancedTransactions} groupBy={this.state.groupBy}/>
		return (
			<div>
				<GroupingDropdown onSelect={groupSetter.bind(this)}/>
				<ChartSelect onSelect={chartSelector.bind(this)}/>
				<h1>Income By {this.state.groupBy}</h1>
				{shouldBePie(this.state.shouldBePie)}
			</div>
		)
	}
}

export default IncomePage;
