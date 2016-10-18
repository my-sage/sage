'use strict';
import { round } from 'lodash';
import React, {Component} from 'react';
import TransactionModal from './TransactionModal';

const TransactionSingle = ({date, merchantId, categoryId, amount, id, category, merchant}) => {
	const transaction = {date,merchantId,categoryId,amount,id}  //with out the category and merchant name
  Number.prototype.formatMoney = function(c, d, t){
  var n = this, 
      c = isNaN(c = Math.abs(c)) ? 2 : c, 
      d = d == undefined ? "." : d, 
      t = t == undefined ? "," : t, 
      s = n < 0 ? "-" : "", 
      i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
      j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  };

    let dt = new Date(+date);
    let formattedDate = ('0' + (dt.getMonth() + 1)).slice(-2) + '/' + ('0' + dt.getDate()).slice(-2) + '/' + dt.getFullYear();

	return (
		<tr key={id} style={{border: "1px solid black"}}>
			<td style={styles.dataStyle}>{formattedDate}</td>
			<td style={styles.dataStyle}>{merchant.name}</td>
			<td style={styles.dataStyle}>{category ? category.name : 'UNCATEGORIZED'}</td>
      <td style={styles.dataStyle}>{amount > 0 ? '' : '-'}${Math.abs(round(amount, 2)).formatMoney(2)}</td>
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
