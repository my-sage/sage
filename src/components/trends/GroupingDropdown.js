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
				<MenuItem eventKey="fullDate">Day</MenuItem>
				<MenuItem eventKey="month">Month</MenuItem>
				<MenuItem eventKey="year">Year</MenuItem>
				<MenuItem eventKey="categoryName">Category</MenuItem>
				<MenuItem eventKey="merchantName">Merchant</MenuItem>
			</Dropdown.Menu>
		</Dropdown>
	)
};

export default GroupingDropdown;