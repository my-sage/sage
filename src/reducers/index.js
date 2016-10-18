import { combineReducers } from 'redux';
import budgets from './budgetReducer';
import transactions from './transactionReducer';
import categories from './categoryReducer';
import merchants from './merchantReducer';
import accounts from './accountReducer'

const rootReducer = combineReducers({
  budgets,
  transactions,
  categories,
  merchants,
  accounts
});

export default rootReducer;
