'use strict';

import * as merchantApi from '../api/merchant';
import * as actions from './constants/merchantActionTypes';
import { makeActionCreator, makeThunkCreator } from '../utils';

export const fetchMerchants = makeActionCreator(actions.FETCH_MERCHANTS_REQUEST);
export const fetchMerchantsSuccess = makeActionCreator(actions.FETCH_MERCHANTS_SUCCESS, 'merchants');
export const createMerchantSuccess = makeActionCreator(actions.CREATE_MERCHANT_SUCCESS, 'merchant');
export const deleteMerchantSuccess = makeActionCreator(actions.DELETE_MERCHANT_SUCCESS, 'deletedMerchantId');
export const updateMerchantSuccess = makeActionCreator(actions.UPDATE_MERCHANT_SUCCESS, 'merchant');
export const apiFail = makeActionCreator(actions.API_FAIL, 'message');

//thunk actions
export const getAllMerchants = makeThunkCreator(merchantApi.getAllMerchants
, fetchMerchants
, fetchMerchantsSuccess
, apiFail);

export const createMerchant = makeThunkCreator(merchantApi.createMerchant
, false
, createMerchantSuccess
, apiFail);

export const deleteMerchant = makeThunkCreator(merchantApi.deleteMerchant
, false
, deleteMerchantSuccess
, apiFail);

// updateBudget :: (budgetId, budget) 
export const updateMerchant = makeThunkCreator(merchantApi.updateMerchant
, false
, updateMerchantSuccess
, apiFail);
