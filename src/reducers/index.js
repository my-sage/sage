import { combineReducers } from 'redux';
import budgets from './budgetReducer';
import transactions from './transactionReducer';
import categories from './categoryReducer';
import merchants from './merchantReducer';

const rootReducer = combineReducers({
  budgets,
  transactions,
  categories,
  merchants
});

export default rootReducer;
