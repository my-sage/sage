'use strict';

import { combineReducers } from 'redux';
import * as actions from '../actions/constants/budgetActionTypes';
import { createReducer } from '../utils';
import { evolve, map, filter } from 'ramda';
import initialState from './initialState';

const { budgets } = initialState;

const dataHandlers = {
  [actions.CREATE_BUDGET](state, action) {
    return state;
  },
  [actions.DELETE_BUDGET](state, action) {
    return state.filter(budget => budget);
  },
  [actions.FETCH_BUDGETS_SUCCESS](state, action) {
    console.log(action.budgets);
    return action.budgets;
  }
};

const data = createReducer(budgets.data, dataHandlers);

const isFetchingHandlers = {
  [actions.FETCH_BUDGETS_REQUEST](state, action) {
    return true;
  },
  [actions.FETCH_BUDGETS_SUCCESS](state, action) {
    return false;
  },
  [actions.FETCH_BUDGETS_FAIL](state, action) {
    return false;
  }
}

const isFetching= createReducer(budgets.isFetching, isFetchingHandlers)

export default combineReducers({
  data, 
  isFetching
});
