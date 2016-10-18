'use strict';
import React, {Component} from 'react';
import BudgetBar from './BudgetBar';
import BudgetUpdateModal from './BudgetUpdateModal'
import {Panel} from 'react-bootstrap'
import {round} from 'lodash'

const style = {
	li: {
		listStyleType: 'none'
	}
};

const BudgetItem = ({budget}) => {
	if (budget) {
		const {name, currentAmount, targetAmount, endDate, category} = budget;
		return (
			<Panel>
				<li style={style.li}>
					<div>
						<p style={{float: 'left'}}><b>{category ? category.name : 'UNCATEGORIZED'}</b>: {name}</p>
						<p style={{textAlign: 'right', marginRight: '130px'}}><b>${Math.abs(round(currentAmount, 0))} </b><i>
							of </i><b>${targetAmount}</b>
						</p>
					</div>
					<BudgetUpdateModal budget={budget} style={{marginTop: '0px'}}/>
					<div>
						<BudgetBar targetAmount={targetAmount} currentAmount={currentAmount}/>
					</div>
				</li>
			</Panel>
		)
	} else {
		return (
			<Panel>
				Empty Budget
			</Panel>
		)
	}
};

export default BudgetItem;
