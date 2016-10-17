import React, {Component} from 'react';
import PieChart from './PieChart';
import NetIncomeGraph from './NetIncomeGraph';
import FilterContainer from '../shared/FilterContainer';
import {enhanceTransactions} from '../../utils/graphUtils';
import GroupingDropdown from './GroupingDropdown';

class IncomePage extends Component {
	constructor() {
		super();
		this.state = {groupBy: 'fullDate', displayName: 'Day'}
	}

	render() {
		const enhancedTransactions = enhanceTransactions(this.props.transactions);
		const groupSetter = (eventKey) => this.setState({groupBy: eventKey.groupBy, displayName: eventKey.displayName});
		const shouldBePie = (boolean) => {
			return boolean ?
				<PieChart data={enhancedTransactions} groupBy={this.state.groupBy}/> :
				<NetIncomeGraph data={enhancedTransactions} groupBy={this.state.groupBy}/>;
		};
		return (
			<div>
				<div style={{paddingTop:'20px'}}>
					<FilterContainer />
				</div>
				<GroupingDropdown onSelect={groupSetter.bind(this)}/>
				<h3>Net Income By {this.state.displayName}</h3>
				{shouldBePie(this.state.shouldBePie)}
			</div>
		)
	}
}

export default IncomePage;