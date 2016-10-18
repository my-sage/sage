import React from 'react';
import {Tabs, Tab, Grid, Col, Row, Panel} from 'react-bootstrap'
import {Link} from 'react-router';
import TransactionSingle from '../transaction/TransactionSingle';
import BudgetItem from '../budgets/BudgetItem';
import {Table} from 'react-bootstrap';
import NetIncomeGraph from '../trends/NetIncomeGraph';
import {enhanceTransactions} from '../../utils/graphUtils';

const bankPanels = {
	margin: '10px'
};

const OverviewContent = ({transactions, budgets, accounts}) => {
	return (
		<Grid>

			<Row className="show-grid">
				<Col md={6}>
					<Link to='/transactions'><Panel>
						<Table>
						<h6><i>Latest Transactions</i></h6>
							<tbody>
							{transactions.slice(0,5).map(TransactionSingle)}
							</tbody>
						</Table>
					</Panel></Link>
				</Col>

				<Col md={6}>
					<Link to='/budgets'><Panel>
					<h6><i>Budgets</i></h6>
						<BudgetItem budget={budgets[0]}/>
						<BudgetItem budget={budgets[1]}/>
					</Panel></Link>
				</Col>
			</Row>

			<Row className="show-grid">
				<Col md={6}>
					<Link to='/trends'><Panel>
					<h6><i>Past Month Net Income</i></h6>
						<NetIncomeGraph data={enhanceTransactions(transactions)} groupBy="fullDate"/>
					</Panel></Link>
				</Col>

				<Col md={6}>
					<Link to='/settings'><Panel>
					<h6><i>Your Accounts</i></h6>
						<Row className="show-grid">
							<Panel style={bankPanels}>
								<h6>Bank 1</h6>
							</Panel>
						</Row>
						<Row className="show-grid">
							<Panel style={bankPanels}>
								<h6>Bank 2</h6>
							</Panel>
						</Row>
						<Row className="show-grid">
							<Panel style={bankPanels}>
								<h6>Bank 3</h6>
							</Panel>
						</Row>
					</Panel></Link>
				</Col>
			</Row>

		</Grid>
	)
};

export default OverviewContent;