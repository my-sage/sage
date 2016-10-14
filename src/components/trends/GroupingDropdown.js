'use strict';
import React from 'react';
import {Dropdown, MenuItem} from 'react-bootstrap';

const GroupingDropdown = ({onSelect}) => {
	return (
		<Dropdown title="Group By" onSelect={onSelect}>
			<Dropdown.Toggle>
				Group Results By ...
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<MenuItem eventKey={{displayName: 'Day', groupBy: 'fullDate'}}>Day</MenuItem>
				<MenuItem eventKey={{displayName: 'Month', groupBy: 'month'}}>Month</MenuItem>
				<MenuItem eventKey={{displayName: 'Year', groupBy: 'year'}}>Year</MenuItem>
				<MenuItem eventKey={{displayName: 'Category', groupBy: 'categoryName'}}>Category</MenuItem>
				<MenuItem eventKey={{displayName: 'Merchant', groupBy: 'merchantName'}}>Merchant</MenuItem>
			</Dropdown.Menu>
		</Dropdown>
	)
};

export default GroupingDropdown;