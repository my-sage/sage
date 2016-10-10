'use strict';

import { combineReducers } from 'redux';
import * as actions from '../actions/constants/budgetActionTypes';
import { createReducer, createFetchingHandlers, createErrorHandlers } from '../utils';
import { evolve, map, curry, filter, append } from 'ramda';
import { forEach } from 'lodash';
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
    return append(action.budget, state);
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

const isFetchingHandlers = createFetchingHandlers({
  truthy: [actions.FETCH_BUDGETS_REQUEST],
  falsey: [actions.FETCH_BUDGETS_SUCCESS, actions.API_FAIL]
});

const isFetching= createReducer(budgets.isFetching, isFetchingHandlers);

const errorMessageHandlers = createErrorHandlers({
  truthy: [actions.API_FAIL],
  falsey: [actions.FETCH_BUDGETS_SUCCESS, actions.FETCH_BUDGETS_REQUEST]
});

const errorMessage = createReducer(budgets.errorMessage, errorMessageHandlers);

export default combineReducers({
  data, 
  isFetching,
  errorMessage
});
