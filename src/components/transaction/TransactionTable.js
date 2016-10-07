'use strict';

import React from 'react';
import TransactionSingle from './TransactionSingle';
const TransactionTable = ({transactions}) => {
	return (
		<table>
			{transactions.map(transaction=>TransactionSingle(transaction))}
			{/*<TransactionSingle {...transactions[0]}/>*/}
		</table>
	)
};

export default TransactionTable