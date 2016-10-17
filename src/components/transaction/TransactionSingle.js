'use strict';

import React, {Component} from 'react';
import TransactionModal from './TransactionModal';

const TransactionSingle = ({date, merchantId, categoryId, amount, id, category, merchant}) => {
	const transaction = {date,merchantId,categoryId,amount,id}  //with out the category and merchant name
    let dt = new Date(+date);
    let formattedDate = ('0' + dt.getDate()).slice(-2) + '/' + ('0' + (dt.getMonth() + 1)).slice(-2) + '/' + dt.getFullYear() + ' ' + ('0' + dt.getHours()).slice(-2) + ':' + ('0' + dt.getMinutes()).slice(-2);

	return (
		<tr key={id} style={{border: "1px solid black"}}>
			<td style={styles.dataStyle}>{formattedDate}</td>
			<td style={styles.dataStyle}>{merchant.name}</td>
			<td style={styles.dataStyle}>{category ? category.name : 'UNCATEGORIZED'}</td>
			<td style={styles.dataStyle}>${amount}</td>
			<td style={styles.dataStyle}>
				<TransactionModal transaction={transaction}/>
			</td>
		</tr>
	)
};

const styles = {
	dataStyle: {
		// paddingRight: '5'
		// border: "1px solid #ddd",
		textAlign: "center"
	}
};

export default TransactionSingle;
