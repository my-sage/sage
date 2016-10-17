'use strict';
import { combineReducers } from 'redux';
import * as actions from '../actions/constants/transactionActionTypes';
import initialState from './initialState';
import { evolve, map, curry, filter, append, forEach } from 'ramda';
import { createReducer, createFetchingHandlers, createErrorHandlers } from '../utils';

const { transactions } = initialState;

const dataHandlers = {
	[actions.CREATE_TRANSACTION_SUCCESS](state, action) {
		return append(action.transaction, state);
	},
  [actions.FETCH_TRANSACTIONS_SUCCESS](state, action) {
    return action.transactions;
  },
	[actions.DELETE_TRANSACTION_SUCCESS](state, action){
    return filter(transaction => transaction.id !== +action.deletedTransactionId
    , state);
  },
  [actions.UPDATE_TRANSACTION_SUCCESS](state, action) {
    const update = curry((updatedTransaction, oldTransaction) => 
      oldTransaction.id === updatedTransaction.id ? updatedTransaction : oldTransaction);
    if(Array.isArray(action.transaction)){
      let newState = state;
      forEach((newTransaction) => {
        newState = map(update(newTransaction), newState);
      }, action.transaction)
      return newState;
    }
    return map(update(action.transaction), state)
  }
};

const data = createReducer(transactions.data, dataHandlers);

const isFetchingHandlers = createFetchingHandlers({
  truthy: [actions.FETCH_TRANSACTIONS_REQUEST],
  falsey: [actions.FETCH_TRANSACTIONS_SUCCESS, actions.API_FAIL]
});

const isFetching = createReducer(transactions.isFetching, isFetchingHandlers);

const errorMessageHandlers = createErrorHandlers({
  truthy: [actions.API_FAIL],
  falsey: [actions.FETCH_TRANSACTIONS_SUCCESS, actions.FETCH_TRANSACTIONS_REQUEST]
});

const errorMessage = createReducer(transactions.errorMessage, errorMessageHandlers);

const queryHandlers = {
  [actions.AFFIX_QUERY](state, action) {
    return action.query ? action.query : null;
  }
};

const query = createReducer(transactions.query, queryHandlers);

export default combineReducers({
  data, 
  isFetching,
  errorMessage,
  query
});
