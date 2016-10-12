'use strict';

import React from 'react';
import TransactionSingle from './TransactionSingle';
import { Table } from "react-bootstrap";

const TransactionTable = ({transactions}) => {
	return (
		<Table striped bordered condensed hover responsive>
			<thead>
				<tr style={headerBar}>
					<th style={header}>Date</th>
					<th style={header}>Merchant</th>
					<th style={header}>Category</th>
					<th style={header}>Amount</th>
					<th style={header}>Edit</th>
				</tr>
			</thead>
			<tbody>
			{transactions.map(transaction=>TransactionSingle(transaction))}
			</tbody>
		</Table>
	)
};

const tableStyle = {
      broder: "1px solid black"
};

const header = {
	textAlign: "center"
}

const headerBar = {
	background: "#34495C",
	color:'white'
}

export default TransactionTable