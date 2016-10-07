'use strict';

import React, {Component} from 'react';

const TransactionSingle = ({date, merchant, category, amount, onChange, id}) => {
	return (
		<tr key={id}>
			<td style={styles.dataStyle} contentEditable='true'>{date}</td>
			<td style={styles.dataStyle} contentEditable='true'>{merchant}</td>
			<td style={styles.dataStyle}>{category}</td>
			<td style={styles.dataStyle}>$ {amount}</td>
		</tr>
	)
};

const styles = {
	dataStyle: {
		paddingRight: '5'
	}
};

export default TransactionSingle;