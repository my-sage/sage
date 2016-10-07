import { combineReducers } from 'redux';
import budgets from './budgetReducer';
import transactions from './transactionReducer';

const rootReducer = combineReducers({
  budgets, transactions
});

export default rootReducer;
