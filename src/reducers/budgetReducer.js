'use strict';

import * as actions from '../actions/constants/budgetActionTypes';
import { createReducer } from '../utils';
import { evolve, map, filter } from 'ramda';

const handlers = {
  [actions.CREATE_BUDGET](state, action) {
    return state;
  },
  [actions.DELETE_BUDGET](state, action) {
    return state.filter(budget => budget);
  },
  [actions.LOAD_BUDGETS_SUCCESS](state, action) {
    console.log(action.budgets);
    return action.budgets;
  }
};

export default createReducer([], handlers);
