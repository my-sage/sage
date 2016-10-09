'use strict';

import React, {Component} from 'react';
import TransactionModal from './TransactionModal'

const TransactionSingle = ({date, merchantId, categoryId, amount, id}) => {
	return (
		<tr key={id}>
			<td style={styles.dataStyle}>{date}</td>
			<td style={styles.dataStyle}>{merchantId}</td>
			<td style={styles.dataStyle}>{categoryId}</td>
			<td style={styles.dataStyle}>$ {amount}</td>
			<td style={styles.dataStyle}>
				<TransactionModal merchantId={merchantId} categoryId={categoryId} date={date} amount={amount} id={id}/>
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