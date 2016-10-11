import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import stateGen from './static-state-generator';
import routes from './routes';
import { getCurrentBudgets, updateBudget, deleteBudget } from './actions/budgetActions';
import { getAllTransactions, createTransaction} from './actions/transactionActions';
import { getAllCategories } from './actions/categoryActions';
import { getAllMerchants } from './actions/merchantActions';
import '../node_modules/toastr/build/toastr.min.css'
import R from 'ramda';

// const data = R.pick(['merchants'], stateGen())
// let state = {};
// state = R.merge(data, state)

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
)
