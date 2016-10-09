'use strict';

import { CREATE_TRANSACTION, UPDATE_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTION, LOAD_TRANSACTIONS_SUCCESS, LOADING_TRANSACTIONS, LOAD_TRANSACTIONS_FAIL} from '../actions/constants/transactionActionTypes';
import {createReducer} from '../utils';
import {evolve, map, filter} from 'ramda';

const handlers = {
	[CREATE_TRANSACTION](state, action) {
		console.log('WORK IN PROGRESS');
		return state;
	},
	[UPDATE_TRANSACTION](state, action) {
		console.log('WORK IN PROGRESS');
		return state;
	},
	[DELETE_TRANSACTION](state, action){
		return state.filter(transaction => transaction);
	},
	[GET_TRANSACTION](state, action){
		return [...state, action.transaction]
	},
	[LOAD_TRANSACTIONS_SUCCESS](state, action){
		return {data: action.transactions, isFetching: false};
	},
	[LOAD_TRANSACTIONS_FAIL](state, action){
		console.log('WORK IN PROGRESS');
		return state;
	}
};

export default createReducer([], handlers);