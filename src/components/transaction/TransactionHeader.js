'use strict';

import React from 'react';

const divStyle = {
	float: 'right'
}

const TransactionHeader = ({title, totalCash, totalDebt})=> {
	return (
		<div style={divStyle}>
			<p><strong>{title}</strong></p>
			<p>Total Cash: {totalCash}</p>
			<p>Total Debt: {totalDebt}</p>
		</div>
	)
};

export default TransactionHeader;