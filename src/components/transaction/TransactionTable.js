'use strict';

import React from 'react';
import TransactionSingle from './TransactionSingle';
const TransactionTable = ({transactions}) => {
	return (
		<table>
			{transactions.map(transaction=>TransactionSingle(transaction))}
		</table>
	)
};

export default TransactionTable