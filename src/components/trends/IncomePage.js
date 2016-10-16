import React, {Component} from 'react';
import {wantIncomeFilter, enhanceTransactions} from '../../utils/graphUtils';
import PieChart from './PieChart';
import VerticalBarGraph from './VerticalBarGraph';
import GroupingDropdown from './GroupingDropdown';
import ChartSelect from './ChartSelect';
import FilterContainer from '../shared/FilterContainer';

class IncomePage extends Component {
	constructor() {
		super();
		this.state = {groupBy: 'fullDate', shouldBePie: false, displayName: 'Day'}
	}

	render() {
		const incomeData = wantIncomeFilter(true)(this.props.transactions);
		const enhancedTransactions = enhanceTransactions(incomeData);
		const groupSetter = (eventKey) => this.setState({groupBy: eventKey.groupBy, displayName: eventKey.displayName});
		const chartSelector = (eventKey) => this.setState({shouldBePie: eventKey});
		const shouldBePie = (boolean) => boolean ? <PieChart data={enhancedTransactions} groupBy={this.state.groupBy}/> : <VerticalBarGraph data={enhancedTransactions} groupBy={this.state.groupBy} barColor='#2ecc71'/>
		return (
			<div>
				<div style={{paddingTop:'20px'}}>
					<FilterContainer />
				</div>
				<GroupingDropdown onSelect={groupSetter.bind(this)}/>
				<ChartSelect onSelect={chartSelector.bind(this)}/>
				<h3>Income By {this.state.displayName}</h3>
				{shouldBePie(this.state.shouldBePie)}
			</div>
		)
	}
}

export default IncomePage;
