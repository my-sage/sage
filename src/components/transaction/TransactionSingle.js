'use strict';

import React, {Component} from 'react';
import TransactionModal from './TransactionModal'

const TransactionSingle = ({date, merchantId, categoryId, amount, id}) => {
	const transaction = {date,merchantId,categoryId,amount,id}
	return (
		<tr key={id}>
			<td style={styles.dataStyle}>Date: {date} |</td>
			<td style={styles.dataStyle}>Merchant {merchantId} |</td>
			<td style={styles.dataStyle}>Category {categoryId} |</td>
			<td style={styles.dataStyle}>Amount ${amount} |</td>
			<td style={styles.dataStyle}>
				<TransactionModal transaction={transaction}/>
			</td>
		</tr>
	)
};

const styles = {
	dataStyle: {
		paddingRight: '5'
	}
};

export default TransactionSingle;