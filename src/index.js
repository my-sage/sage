import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import stateGen from './static-state-generator';
import routes from './routes';
import { loadBudgets } from './actions/budgetAction';
import '../node_modules/toastr/build/toastr.min.css'
import R from 'ramda';
import 'bootstrap/dist/css/bootstrap.min.css';

const state = R.pick(['budgets', 'transactions','merchants','categories'], stateGen())
state.budgets = [];

const store = configureStore(state);
store.dispatch(loadBudgets())

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
    document.getElementById('app')
)
