'use strict';

import * as budgetApi from '../api/budget';
import * as actions from './constants/budgetActionTypes';
import { makeActionCreator, dispatchFail } from '../utils';

export const createBudget = makeActionCreator(actions.CREATE_BUDGET, 'budget');
export const deleteBudget = makeActionCreator(actions.DELETE_BUDGET, 'id');
export const updateBudget = makeActionCreator(actions.UPDATE_BUDGET, 'id', 'budget');
export const loadBudgetsSuccess = makeActionCreator(actions.LOAD_BUDGETS_SUCCESS, 'budgets');
export const loadBudgetsFail = makeActionCreator(actions.LOAD_BUDGETS_FAIL, 'error');


//thunk actions
export function loadBudgets() {
  return function(dispatch) {
    return budgetApi.getAllBudgets()
    .then(budgets => {
      dispatch(loadBudgetsSuccess(budgets));
    })
    .catch(dispatchFail(dispatch, loadBudgetsFail))
  }
}
