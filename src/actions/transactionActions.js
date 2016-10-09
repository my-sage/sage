'use strict';

import * as transactionApi from '../api/transaction';
import {CREATE_TRANSACTION, UPDATE_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTION, FETCH_TRANSACTIONS_SUCCESS, FETCH_TRANSACTIONS_REQUEST, FETCH_TRANSACTIONS_FAIL} from './constants/transactionActionTypes';
import { makeActionCreator, dispatchFail } from '../utils/';

export const createTransaction = makeActionCreator(CREATE_TRANSACTION, 'transaction');
export const updateTransaction = makeActionCreator(UPDATE_TRANSACTION, 'id', 'transaction');
export const deleteTransaction = makeActionCreator(DELETE_TRANSACTION, 'id');
export const fetchTransactions = makeActionCreator(FETCH_TRANSACTIONS_REQUEST);
export const fetchTransactionsSuccess = makeActionCreator(FETCH_TRANSACTIONS_SUCCESS, 'transactions');
export const fetchTransactionsFail = makeActionCreator(FETCH_TRANSACTIONS_FAIL, 'error');

export function loadTransactions() {
	return function(dispatch) {
		dispatch(fetchTransactions());
		return transactionApi.getAllTransactions()
			.then(transactions => {
				dispatch(fetchTransactionsSuccess(transactions));
			})
			.catch(dispatchFail(dispatch, fetchTransactionsFail));
	}
}