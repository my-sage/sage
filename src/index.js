import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import stateGen from './static-state-generator';
import routes from './routes';
import { getCurrentBudgets, updateBudget, deleteBudget } from './actions/budgetActions';
import '../node_modules/toastr/build/toastr.min.css'

const store = configureStore();
store.dispatch(getCurrentBudgets());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
    document.getElementById('app')
)
