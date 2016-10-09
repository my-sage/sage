'use strict';

import React from 'react';
import TransactionSingle from './TransactionSingle';
const TransactionTable = ({transactions}) => {
	return (
		<table>
			<tbody>
			{transactions.map(transaction=>TransactionSingle(transaction))}
			</tbody>
		</table>
	)
};

export default TransactionTable