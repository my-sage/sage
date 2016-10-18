import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { getCurrentBudgets, updateBudget, deleteBudget } from './actions/budgetActions';
import { getAllTransactions, createTransaction} from './actions/transactionActions';
import { getAllCategories } from './actions/categoryActions';
import { getAllMerchants } from './actions/merchantActions';

const store = configureStore();
store.dispatch(getCurrentBudgets());
store.dispatch(getAllTransactions());
store.dispatch(getAllCategories());
store.dispatch(getAllMerchants());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
    document.getElementById('app')
);
