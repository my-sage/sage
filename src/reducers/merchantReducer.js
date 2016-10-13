'use strict';

import { combineReducers } from 'redux';
import * as actions from '../actions/constants/merchantActionTypes';
import {createReducer, createFetchingHandlers, createErrorHandlers} from '../utils';
import {evolve, map, curry, filter, append} from 'ramda';
import { forEach } from 'lodash';
import initialState from './initialState';

const { merchants } = initialState;

export const getMerchants = (state) => state.data;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;

const dataHandlers = {
  [actions.FETCH_MERCHANTS_SUCCESS](state, action) {
    return action.merchants;
  },
  [actions.CREATE_MERCHANT_SUCCESS](state, action) {
    return append(action.merchant, state);
  },
  [actions.DELETE_MERCHANT_SUCCESS](state, action) {
    return filter(merchant => merchant.id !== +action.deletedMerchantId, state)
  },
  [actions.UPDATE_MERCHANT_SUCCESS](state, action) {
    const update = curry((updatedMerchant, oldMerchant) => 
      oldMerchant.id === updatedMerchant.id ? updatedMerchant : oldMerchant)
    return map(update(action.merchant), state)
  }    
};

const data = createReducer(merchants.data, dataHandlers);

const isFetchingHandlers = createFetchingHandlers({
  truthy: [actions.FETCH_MERCHANTS_REQUEST],
  falsey: [actions.FETCH_MERCHANTS_SUCCESS, actions.API_FAIL]
});

const isFetching= createReducer(merchants.isFetching, isFetchingHandlers);

const errorMessageHandlers = createErrorHandlers({
  truthy: [actions.API_FAIL],
  falsey: [actions.FETCH_MERCHANTS_SUCCESS, actions.FETCH_MERCHANTS_REQUEST]
});

const errorMessage = createReducer(merchants.errorMessage, errorMessageHandlers);

export default combineReducers({
  data, 
  isFetching,
  errorMessage
});
