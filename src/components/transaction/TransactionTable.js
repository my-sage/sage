'use strict';

import React from 'react';
import TransactionSingle from './TransactionSingle';
import { Table } from "react-bootstrap";

const TransactionTable = ({transactions}) => {
	return (
		<Table striped bordered condensed hover responsive>
			<thead>
				<tr>
					<th>#</th>
					<th>Date</th>
					<th>Merchant</th>
					<th>Category</th>
					<th>Amount</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
			{transactions.map(transaction=>TransactionSingle(transaction))}
			</tbody>
		</Table>
	)
};

var tableStyle = {
      "border": "1px solid black"
};

export default TransactionTable