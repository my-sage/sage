import { combineReducers } from 'redux';
import budgets from './budgetReducer';

const rootReducer = combineReducers({
  budgets,
});

export default rootReducer;
