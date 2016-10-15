'use strict';

import React from 'react';
import {Dropdown, MenuItem} from 'react-bootstrap';

const ChartSelect = ({onSelect}) => {
	return (
		<Dropdown title="Chart Type" onSelect={onSelect}>
			<Dropdown.Toggle>
				Chart Type
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<MenuItem eventKey={false}>Bar Graph</MenuItem>
				<MenuItem eventKey={true}>Pie Chart</MenuItem>
			</Dropdown.Menu>
		</Dropdown>
	)
};

export default ChartSelect;