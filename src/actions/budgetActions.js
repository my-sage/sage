'use strict';

import * as budgetApi from '../api/budget';
import * as actions from './constants/budgetActionTypes';
import { makeActionCreator, makeThunkCreator } from '../utils';

export const fetchBudgets = makeActionCreator(actions.FETCH_BUDGETS_REQUEST);
export const fetchBudgetsSuccess = makeActionCreator(actions.FETCH_BUDGETS_SUCCESS, 'budgets');
export const createBudgetSuccess = makeActionCreator(actions.CREATE_BUDGET_SUCCESS, 'budget');
export const deleteBudgetSuccess = makeActionCreator(actions.DELETE_BUDGET_SUCCESS, 'deletedBudgetId');
export const updateBudgetSuccess = makeActionCreator(actions.UPDATE_BUDGET_SUCCESS, 'budget');
export const apiFail = makeActionCreator(actions.API_FAIL, 'error');

//thunk actions
export const getCurrentBudgets = makeThunkCreator(budgetApi.getCurrentBudgets
, fetchBudgets
, fetchBudgetsSuccess
, apiFail);

export const createBudget = makeThunkCreator(budgetApi.createBudget
, false
, createBudgetSuccess
, apiFail);

export const deleteBudget = makeThunkCreator(budgetApi.deleteBudget
, false
, deleteBudgetSuccess
, apiFail);

// updateBudget :: (budgetId, budget) 
export const updateBudget = makeThunkCreator(budgetApi.updateBudget
, false
, updateBudgetSuccess
, apiFail);

