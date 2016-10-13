'use strict';

import * as categoryApi from '../api/category';
import * as actions from './constants/categoryActionTypes';
import { makeActionCreator, makeThunkCreator } from '../utils';

export const fetchCategories = makeActionCreator(actions.FETCH_CATEGORIES_REQUEST);
export const fetchCategoriesSuccess = makeActionCreator(actions.FETCH_CATEGORIES_SUCCESS, 'categories');
export const createCategorySuccess = makeActionCreator(actions.CREATE_CATEGORY_SUCCESS, 'category');
export const deleteCategorySuccess = makeActionCreator(actions.DELETE_CATEGORY_SUCCESS, 'deletedCategoryId');
export const updateCategorySuccess = makeActionCreator(actions.UPDATE_CATEGORY_SUCCESS, 'category');
export const apiFail = makeActionCreator(actions.API_FAIL, 'message');

//thunk actions
export const getAllCategories = makeThunkCreator(categoryApi.getAllCategories
, fetchCategories
, fetchCategoriesSuccess
, apiFail);

export const createCategory = makeThunkCreator(categoryApi.createCategory
, false
, createCategorySuccess
, apiFail);

export const deleteCategory = makeThunkCreator(categoryApi.deleteCategory
, false
, deleteCategorySuccess
, apiFail);

// updateBudget :: (budgetId, budget) 
export const updateCategory = makeThunkCreator(categoryApi.updateCategory
, false
, updateCategorySuccess
, apiFail);