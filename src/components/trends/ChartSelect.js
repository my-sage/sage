'use strict';

import React from 'react';
import {Dropdown, MenuItem, Pager} from 'react-bootstrap';

const ChartSelect = ({onSelect}) => {
	return (


		<Pager onSelect={onSelect}>	
			<Pager.Item eventKey={false}><i className="fa fa-bar-chart" aria-hidden="true"></i>
</Pager.Item>
			<Pager.Item eventKey={true}><i className="fa fa-pie-chart" aria-hidden="true"></i></Pager.Item>
		</Pager>
	)
};

export default ChartSelect;

		// <Dropdown title="Chart Type" onSelect={onSelect}>
		// 	<Dropdown.Toggle>
		// 		Chart Type
		// 	</Dropdown.Toggle>
		// 	<Dropdown.Menu>
		// 		<MenuItem eventKey={false}>Bar Graph</MenuItem>
		// 		<MenuItem eventKey={true}>Pie Chart</MenuItem>
		// 	</Dropdown.Menu>
		// </Dropdown>