'use strict';

import React, {Component} from 'react';
import TransactionModal from './TransactionModal'

const TransactionSingle = ({date, merchant, category, amount, id}) => {
	return (
		<tr key={id}>
			<td style={styles.dataStyle}>{date}</td>
			<td style={styles.dataStyle}>{merchant}</td>
			<td style={styles.dataStyle}>{category}</td>
			<td style={styles.dataStyle}>$ {amount}</td>
			<td style={styles.dataStyle}>
				<TransactionModal merchant={merchant} category={category} date={date} amount={amount}/>
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