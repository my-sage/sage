'use strict';

import { combineReducers } from 'redux';
import * as actions from '../actions/constants/budgetActionTypes';
import { createReducer } from '../utils';
import { evolve, map, curry, filter } from 'ramda';
import initialState from './initialState';

const { budgets } = initialState;
//
//helper functions
export const getBudgets = (state) => state.data;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;

const dataHandlers = {
  [actions.FETCH_BUDGETS_SUCCESS](state, action) {
    return action.budgets;
  },
  [actions.CREATE_BUDGET_SUCCESS](state, action) {
    return [...state, action.budget];
  },
  [actions.DELETE_BUDGET_SUCCESS](state, action) {
    return filter(budget => budget.id !== +action.deletedBudgetId, state)
  },
  [actions.UPDATE_BUDGET_SUCCESS](state, action) {
    const update = curry((updatedBudget, oldBudget) => 
      oldBudget.id === updatedBudget.id ? updatedBudget : oldBudget)
    return map(update(action.budget), state)
  },
};

const data = createReducer(budgets.data, dataHandlers);

const isFetchingHandlers = {
  [actions.FETCH_BUDGETS_REQUEST](state, action) {
    return true;
  },
  [actions.FETCH_BUDGETS_SUCCESS](state, action) {
    return false;
  },
  [actions.API_FAIL](state, action) {
    return false;
  }
};

const isFetching= createReducer(budgets.isFetching, isFetchingHandlers);

const errorMessageHandlers = {
  [actions.FETCH_BUDGETS_REQUEST](state, action) {
    return null;
  },
  [actions.FETCH_BUDGETS_SUCCESS](state, action) {
    return null;
  },
  [actions.API_FAIL](state, action) {
    return action.message;
  }
};

const errorMessage = createReducer(budgets.errorMessage, errorMessageHandlers);

export default combineReducers({
  data, 
  isFetching,
  errorMessage
});
