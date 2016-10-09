'use strict';

import * as transactionApi from '../api/transaction';
import {CREATE_TRANSACTION, UPDATE_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTION, LOAD_TRANSACTIONS_SUCCESS, LOADING_TRANSACTIONS, LOAD_TRANSACTIONS_FAIL} from './constants/transactionActionTypes';
import { makeActionCreator, dispatchFail } from '../utils/';

export const createTransaction = makeActionCreator(CREATE_TRANSACTION, 'transaction');
export const updateTransaction = makeActionCreator(UPDATE_TRANSACTION, 'id', 'transaction');
export const getTransaction = makeActionCreator(GET_TRANSACTION, 'id');
export const deleteTransaction = makeActionCreator(DELETE_TRANSACTION, 'id');
export const loadTransactionsSuccess = makeActionCreator(LOAD_TRANSACTIONS_SUCCESS, 'transactions');
export const loadTransactionsFail = makeActionCreator(LOAD_TRANSACTIONS_FAIL, 'error');

export function loadTransactions() {
	return function(dispatch) {
		return transactionApi.getAllTransactions()
			.then(transactions => {
				dispatch(loadTransactionsSuccess(transactions));
			})
			.catch(dispatchFail(dispatch, loadTransactionsFail))
	}
}