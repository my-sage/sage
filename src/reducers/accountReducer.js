'use strict';
import { combineReducers } from 'redux';
import * as actions from '../actions/constants/accountActionTypes';
import initialState from './initialState';
import { evolve, map, curry, filter, append, forEach } from 'ramda';
import { createReducer, createFetchingHandlers, createErrorHandlers } from '../utils';

const { accounts } = initialState;

const dataHandlers = {
  [actions.CREATE_ACCOUNT_SUCCESS](state, action) {
    return append(action.account, state);
  },
  [actions.FETCH_ACCOUNT_SUCCESS](state, action) {
    console.log('ACTION ACCOUNTS', action.accounts)
    return action.accounts;
  },
  [actions.DELETE_ACCOUNT_SUCCESS](state, action) {
    return filter(account => account.id !== +action.account.id, state);
  }
}

const data = createReducer(accounts.data, dataHandlers);

const isFetchingHandlers = createFetchingHandlers({
  truthy: [actions.FETCH_ACCOUNT_REQUEST],
  falsey: [actions.FETCH_ACCOUNT_SUCCESS, actions.API_FAIL]
});

const isFetching = createReducer(accounts.isFetching, isFetchingHandlers);

const errorMessageHandlers = createErrorHandlers({
  truthy: [actions.API_FAIL],
  falsey: [actions.FETCH_ACCOUNT_SUCCESS, actions.FETCH_ACCOUNT_REQUEST]
});

const errorMessage = createReducer(accounts.errorMessage, errorMessageHandlers);

export default combineReducers({
  data, 
  isFetching,
  errorMessage
});
