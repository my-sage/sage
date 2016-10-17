'use strict';
import React from 'react';
import {Dropdown, MenuItem, DropdownButton, SplitButton} from 'react-bootstrap';

const style = {
	margin: '0px 25px',
	display: 'inline'
}

const GroupingDropdown = ({onSelect}) => {
	return (
		<div style ={style}>
		<SplitButton bsStyle="info" title="Group By..." onSelect={onSelect}>
				<MenuItem eventKey={{displayName: 'Day', groupBy: 'fullDate'}}>Day</MenuItem>
				<MenuItem eventKey={{displayName: 'Month', groupBy: 'month'}}>Month</MenuItem>
				<MenuItem eventKey={{displayName: 'Year', groupBy: 'year'}}>Year</MenuItem>
				<MenuItem eventKey={{displayName: 'Category', groupBy: 'categoryName'}}>Category</MenuItem>
				<MenuItem eventKey={{displayName: 'Merchant', groupBy: 'merchantName'}}>Merchant</MenuItem>
		</SplitButton>
		</div>
	)
};

export default GroupingDropdown;