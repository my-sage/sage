'use strict';

import axios from 'axios';
import { parseJSON, getData } from '../../utils';

const BASE_URL = process.env.URL || '';

export const createBudget = 
  (budget) => axios.post(`${BASE_URL}/api/budgets`, budget).then(getData);

export const getTransactionsByBudgetId = 
  (id) => axios.get(`${BASE_URL}/api/budgets/${id}`).then(getData);

export const deleteBudget = 
  (id) => axios.delete(`${BASE_URL}/api/budgets/${id}`).then(getData);

export const updateBudget = 
  (id, updatedBudget) => axios.put(`${BASE_URL}/api/budgets/${id}`, updatedBudget).then(getData);

export const getCurrentBudgets = 
  () => axios.get(`${BASE_URL}/api/budgets/current`).then(getData);

export const getAllBudgets = 
	(filterUrl) => {
	if(filterUrl) return axios.get(`${BASE_URL}/api/budgets${filterUrl}`).then(getData);
	else return axios.get(`${BASE_URL}/api/budgets`).then(getData);
}
