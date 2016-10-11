'use strict';

import { combineReducers } from 'redux';
import * as actions from '../actions/constants/categoryActionTypes';
import {createReducer, createFetchingHandlers, createErrorHandlers} from '../utils';
import {evolve, map, curry, filter, append} from 'ramda';
import { forEach } from 'lodash';
import initialState from './initialState';

const { categories } = initialState;

export const getCategories = (state) => state.data;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;

const dataHandlers = {
  [actions.FETCH_CATEGORIES_SUCCESS](state, action) {
    return action.categories;
  },
  [actions.CREATE_CATEGORY_SUCCESS](state, action) {
    return append(action.category, state);
  },
  [actions.DELETE_CATEGORY_SUCCESS](state, action) {
    return filter(category => category.id !== +action.deletedCategoryId, state)
  },
  [actions.UPDATE_CATEGORY_SUCCESS](state, action) {
    const update = curry((updatedCategory, oldCategory) => 
      oldCategory.id === updatedCategory.id ? updatedCategory : oldCategory)
    return map(update(action.category), state)
  }    
};

const data = createReducer(categories.data, dataHandlers);

const isFetchingHandlers = createFetchingHandlers({
  truthy: [actions.FETCH_CATEGORIES_REQUEST],
  falsey: [actions.FETCH_CATEGORIES_SUCCESS, actions.API_FAIL]
});

const isFetching= createReducer(categories.isFetching, isFetchingHandlers);

const errorMessageHandlers = createErrorHandlers({
  truthy: [actions.API_FAIL],
  falsey: [actions.FETCH_CATEGORIES_SUCCESS, actions.FETCH_CATEGORIES_REQUEST]
});

const errorMessage = createReducer(categories.errorMessage, errorMessageHandlers);

export default combineReducers({
  data, 
  isFetching,
  errorMessage
});
