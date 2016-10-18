'use strict';

import * as accountApi from '../api/account';
import * as actions from './constants/accountActionTypes';
import { makeActionCreator, makeThunkCreator } from '../utils/';

export const fetchAccounts = makeActionCreator(actions.FETCH_ACCOUNT_REQUEST);
export const fetchAccountsSuccess = makeActionCreator(actions.FETCH_ACCOUNT_SUCCESS, 'accounts');
export const createAccountSuccess = makeActionCreator(actions.CREATE_ACCOUNT_SUCCESS, 'account');
export const deleteAccountSuccess = makeActionCreator(actions.DELETE_ACCOUNT_SUCCESS, 'id');
export const updateAccountSuccess = makeActionCreator(actions.UPDATE_ACCOUNT_SUCCESS, 'account');
export const apiFail = makeActionCreator(actions.API_FAIL, 'error');

//thunk Actions
export const getAllAccounts = makeThunkCreator(accountApi.getAllAccounts
, fetchAccounts
, fetchAccountsSuccess
, apiFail);

export const syncAllAccounts = makeThunkCreator(accountApi.syncAllAccounts
, false
, updateAccountSuccess
, apiFail);

export const createAccount = makeThunkCreator(accountApi.createAccount
, false
, createAccountSuccess
, apiFail);

export const updateAccount = makeThunkCreator(accountApi.updateAccount
, false
, updateAccountSuccess
, apiFail);

export const deleteAccount = makeThunkCreator(accountApi.deleteAccount
, false
, deleteAccountSuccess
, apiFail);
