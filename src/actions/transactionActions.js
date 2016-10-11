'use strict';

import * as transactionApi from '../api/transaction';
import * as actions from './constants/transactionActionTypes';
import { makeActionCreator, makeThunkCreator } from '../utils/';

export const fetchTransactions = makeActionCreator(actions.FETCH_TRANSACTIONS_REQUEST);
export const fetchTransactionsSuccess = makeActionCreator(actions.FETCH_TRANSACTIONS_SUCCESS, 'transactions');
export const createTransactionSuccess = makeActionCreator(actions.CREATE_TRANSACTION_SUCCESS, 'transaction');
export const deleteTransactionSuccess = makeActionCreator(actions.DELETE_TRANSACTION_SUCCESS, 'id');
export const updateTransactionSuccess = makeActionCreator(actions.UPDATE_TRANSACTION_SUCCESS, 'transaction');
export const apiFail = makeActionCreator(actions.API_FAIL, 'error');

//thunk Actions
export const getAllTransactions = makeThunkCreator(transactionApi.getAllTransactions
, fetchTransactions
, fetchTransactionsSuccess
, apiFail);

export const createTransaction = makeThunkCreator(transactionApi.createTransaction
, false
, createTransactionSuccess
, apiFail);

export const updateTransaction = makeThunkCreator(transactionApi.updateTransaction
, false
, updateTransactionSuccess
, apiFail);

