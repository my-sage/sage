'use strict';

import { CREATE_TRANSACTION, DELETE_TRANSACTION, FETCH_TRANSACTIONS_SUCCESS, FETCH_TRANSACTIONS_REQUEST, FETCH_TRANSACTIONS_FAIL} from '../actions/constants/transactionActionTypes';
import {createReducer} from '../utils';
import {evolve, map, filter} from 'ramda';
import initialState from './initialState';

const {transactions} = initialState;

const dataHandlers = {
	[CREATE_TRANSACTION](state, action) {
		return state;
	},
	[DELETE_TRANSACTION](state, action){
		return state.filter(transaction => transaction);
	},
	[FETCH_TRANSACTIONS_SUCCESS](state, action){
		return action.transactions;
	}
};

const isFetchingHandlers = {
	[FETCH_TRANSACTIONS_REQUEST](state, action) {
		return true;
	},
	[FETCH_TRANSACTIONS_SUCCESS](state, action) {
		return false;
	},
	[FETCH_TRANSACTIONS_FAIL](state, action) {
		return false;
	}
};

const isFetching = createReducer(transactions.isFetching, isFetchingHandlers);

export default combineReducers({data, isFetching});