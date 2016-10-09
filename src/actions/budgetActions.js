'use strict';

import * as budgetApi from '../api/budget';
import * as actions from './constants/budgetActionTypes';
import { makeActionCreator, makeThunkCreator } from '../utils';

export const createBudget = makeActionCreator(actions.CREATE_BUDGET, 'budget');
export const deleteBudget = makeActionCreator(actions.DELETE_BUDGET, 'id');
export const updateBudget = makeActionCreator(actions.UPDATE_BUDGET, 'id', 'budget');
export const fetchBudgets = makeActionCreator(actions.FETCH_BUDGETS_REQUEST);
export const fetchBudgetsSuccess = makeActionCreator(actions.FETCH_BUDGETS_SUCCESS, 'budgets');
export const fetchBudgetsFail = makeActionCreator(actions.FETCH_BUDGETS_FAIL, 'error');

//thunk actions
export const loadBudgets = makeThunkCreator(budgetApi.getAllBudgets, fetchBudgets, fetchBudgetsSuccess, fetchBudgetsFail);
// export function loadBudgets() {
  // return function(dispatch) {
    // dispatch(fetchBudgets())
    // return budgetApi.getAllBudgets()
    // .then(budgets => {
      // dispatch(fetchBudgetsSuccess(budgets));
    // })
    // .catch(dispatchFail(dispatch, fetchBudgetsFail))
  // }
// }
